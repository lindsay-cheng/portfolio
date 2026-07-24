import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { contactData, heroData, sectionIds } from '../data';
import './Hero.css';

function Hero() {
  const { greeting, name, intro, contactPrefix, photo } = heroData;
  const { local, domain } = contactData.email;
  const email = `${local}@${domain}`;
  const displayEmail = `${local} [at] ${domain.replace('.', ' [dot] ')}`;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="hero" id={sectionIds.home}>
      <div className="hero-content">
        <div className="hero-copy reveal-item">
          <h1>
            {greeting} {name}
          </h1>
          <p className="hero-intro">{intro}</p>
          <p className="hero-contact">
            {contactPrefix}
            <span className="hero-email">
              <button
                type="button"
                className="hero-email-link"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {displayEmail}
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 6 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="hero-email-tooltip"
                    role="status"
                    style={{ x: '-50%' }}
                  >
                    Copied to clipboard
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            .
          </p>
        </div>
        <div className="hero-photo reveal-item" aria-label="Portrait placeholder">
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
