import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { Home, Mail, FileText, Github, Linkedin } from 'lucide-react';
import { navItems } from '../data';
import { scrollToId } from '../lib/scrollToId';
import './Dock.css';

const MOBILE_DOCK_QUERY = '(max-width: 768px)';

const DOCK_ICONS = {
  home: Home,
  mail: Mail,
  file: FileText,
  github: Github,
  linkedin: Linkedin,
};

function useIsMobileDock() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_DOCK_QUERY).matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_DOCK_QUERY);
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return isMobile;
}

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
  const isMobile = useIsMobileDock();
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const activeBaseItemSize = isMobile ? 40 : baseItemSize;
  const activeMagnification = isMobile ? 52 : magnification;
  const activePanelHeight = isMobile ? 56 : panelHeight;
  const activeDockHeight = isMobile ? 120 : dockHeight;

  const maxHeight = useMemo(
    () => Math.max(activeDockHeight, activeMagnification + activeMagnification / 2 + 4),
    [activeDockHeight, activeMagnification]
  );
  const heightRow = useTransform(isHovered, [0, 1], [activePanelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  const items = navItems.map(item => {
    if (item.type === 'separator') {
      return { type: 'separator' };
    }

    const Icon = DOCK_ICONS[item.icon];
    const onClick =
      item.type === 'scroll'
        ? () => scrollToId(item.targetId)
        : () => window.open(item.href, '_blank');

    return {
      icon: <Icon size={18} />,
      label: item.label,
      onClick,
    };
  });

  return (
    <motion.div
      style={isMobile ? undefined : { height, scrollbarWidth: 'none' }}
      className={`dock-outer${isMobile ? ' dock-outer--mobile' : ''}`}
    >
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
        style={{ height: activePanelHeight }}
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
              magnification={activeMagnification}
              baseItemSize={activeBaseItemSize}
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
