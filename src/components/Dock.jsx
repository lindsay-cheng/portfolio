'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { Home, User, Briefcase, FolderGit2, Mail, FileText, Github, Linkedin } from 'lucide-react';
import { contactData } from '../data';
import './Dock.css';

function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

export default function Dock({
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // navigation items with icons and handlers
  const items = [
    {
      icon: <Home size={18} />,
      label: 'Home',
      onClick: () => {
        const element = document.getElementById('home');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <User size={18} />,
      label: 'About',
      onClick: () => {
        const element = document.getElementById('about');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Briefcase size={18} />,
      label: 'Experience',
      onClick: () => {
        const element = document.getElementById('experience');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <FolderGit2 size={18} />,
      label: 'Projects',
      onClick: () => {
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Mail size={18} />,
      label: 'Contact',
      onClick: () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      type: 'separator'
    },
    {
      icon: <FileText size={18} />,
      label: 'Resume',
      onClick: () => window.open(`${import.meta.env.BASE_URL}assets/nav-bar-content/Lindsay_Cheng_Resume.pdf`, '_blank')
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      onClick: () => window.open(contactData.social.github, '_blank')
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      onClick: () => window.open(contactData.social.linkedin, '_blank')
    }
  ];

  return (
    <motion.div style={{ height, scrollbarWidth: 'none' }} className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => {
          if (item.type === 'separator') {
            return (
              <div key={index} className="dock-separator" />
            );
          }
          return (
            <DockItem
              key={index}
              onClick={item.onClick}
              className={item.className}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
