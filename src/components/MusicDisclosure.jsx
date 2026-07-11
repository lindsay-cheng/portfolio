import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { musicData } from '../data';
import './MusicDisclosure.css';

export const MUSIC_PANEL_ID = 'music-disclosure-panel';

function MusicDisclosure({ open, onOpenChange, triggerRef }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
        triggerRef?.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onOpenChange, triggerRef]);

  const { blurb, listening, practicing } = musicData;
  const transition = reduced
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] };

  const splitInTwo = (arr) => {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
  };

  const renderList = (items) => (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <div className="music-item">
            <span className="music-item-title">{item.title}</span>
            <span className="music-item-sep">&mdash;</span>
            <span className="music-item-composer">{item.composer}</span>
          </div>
        </li>
      ))}
    </ul>
  );

  const [listeningA, listeningB] = splitInTwo(listening);
  const [practicingA, practicingB] = splitInTwo(practicing);

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={MUSIC_PANEL_ID}
          role="region"
          aria-label="Music: what I'm listening to and playing"
          className="music-disclosure-panel"
          initial={reduced ? false : { height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={reduced ? undefined : { height: 0, opacity: 0 }}
          transition={transition}
          style={{ overflow: 'hidden' }}
        >
          <div className="music-disclosure-inner">
            <p className="music-blurb">{blurb}</p>
            <div className="music-lists">
              <div className="music-list">
                <h3 className="music-list-title">On reapeat</h3>
                <div className="music-list-columns">
                  {renderList(listeningA)}
                  {renderList(listeningB)}
                </div>
              </div>
              <div className="music-list">
                <h3 className="music-list-title">Playing</h3>
                <div className="music-list-columns">
                  {renderList(practicingA)}
                  {renderList(practicingB)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MusicDisclosure;
