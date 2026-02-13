import { useEffect, useRef, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

// popup component to display experience details
function ExperiencePopup({ experience, onClose }) {
  const poster = experience?.poster;
  const contentRef = useRef(null);
  const [shouldRenderScrollHint, setShouldRenderScrollHint] = useState(false);
  const [isScrollHintVisible, setIsScrollHintVisible] = useState(false);
  const scrollHintDismissedRef = useRef(false);

  // close popup when clicking on the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // close popup on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // show a subtle hint when the popup is scrollable (scrollbar is hidden)
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // reset on open/experience change
    scrollHintDismissedRef.current = false;
    setShouldRenderScrollHint(false);
    setIsScrollHintVisible(false);

    let hideTimer;

    const compute = () => {
      if (scrollHintDismissedRef.current) return;
      const hasOverflow = el.scrollHeight - el.clientHeight > 8;
      const atTop = el.scrollTop < 8;
      setShouldRenderScrollHint(hasOverflow);
      setIsScrollHintVisible(hasOverflow && atTop);
    };

    const onScroll = () => {
      if (scrollHintDismissedRef.current) return;
      if (el.scrollTop > 8) {
        scrollHintDismissedRef.current = true;
        setIsScrollHintVisible(false);
        // keep it mounted briefly so the fade-out transition can play
        hideTimer = window.setTimeout(() => setShouldRenderScrollHint(false), 220);
      }
    };

    compute();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', compute);

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', compute);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, [experience?.id]);

  const handleScrollHintClick = () => {
    const el = contentRef.current;
    if (!el) return;
    el.scrollBy({ top: 260, behavior: 'smooth' });
  };

  return (
    <div className="popup-backdrop" onClick={handleBackdropClick}>
      <div className="popup-content" ref={contentRef}>
        <button className="popup-close" onClick={onClose} aria-label="close popup">
          <X size={22} aria-hidden="true" focusable="false" />
        </button>

        {shouldRenderScrollHint && (
          <div
            className={`popup-scroll-cue ${isScrollHintVisible ? 'is-visible' : ''}`}
            aria-hidden={!isScrollHintVisible}
          >
            <div className="popup-scroll-fade" aria-hidden="true" />
            <button
              type="button"
              className="popup-scroll-hint"
              onClick={handleScrollHintClick}
              aria-label="scroll for more"
              tabIndex={isScrollHintVisible ? 0 : -1}
            >
              <span className="popup-scroll-hint-text">
                More
              </span>
              <ChevronDown size={16} aria-hidden="true" focusable="false" />
            </button>
          </div>
        )}
        
        <div className="popup-image">
          <img src={experience.image} alt={experience.title} />
        </div>
        
        <div className="popup-body">
          <h2>{experience.title}</h2>
          <p className="popup-company">{experience.company}</p>
          
          <div className="popup-meta">
            <p className="popup-period">{experience.period}</p>
            {experience.location && <p className="popup-location">{experience.location}</p>}
          </div>
          
          <p className="popup-description">{experience.description}</p>
          
          {experience.tags && (
            <div className="popup-tags">
              {experience.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}

          {poster?.src && poster.src.trim() !== "" && (
            <div className="popup-poster">
              <div className="popup-poster-header">
                <h3 className="popup-section-title">Poster</h3>
                <div className="popup-poster-actions">
                  <a
                    className="popup-poster-link"
                    href={poster.href && poster.href.trim() !== "" ? poster.href : poster.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open full size →
                  </a>
                </div>
              </div>

              <a
                className="popup-poster-preview"
                href={poster.href && poster.href.trim() !== "" ? poster.href : poster.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="open poster in new tab"
              >
                <img
                  src={poster.src}
                  alt={poster.alt || `${experience.title} poster`}
                  loading="lazy"
                />
              </a>

              {poster.caption && (
                <p className="popup-poster-caption">{poster.caption}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePopup;
