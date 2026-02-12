import { useEffect } from 'react';
import { X } from 'lucide-react';

// popup component to display experience details
function ExperiencePopup({ experience, onClose }) {
  const poster = experience?.poster;

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

  return (
    <div className="popup-backdrop" onClick={handleBackdropClick}>
      <div className="popup-content">
        <button className="popup-close" onClick={onClose} aria-label="close popup">
          <X size={22} aria-hidden="true" focusable="false" />
        </button>
        
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
