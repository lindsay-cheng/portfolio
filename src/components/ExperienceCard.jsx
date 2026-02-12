import { useState, useEffect } from 'react';
import ExperiencePopup from './ExperiencePopup';

// image-only card for experience section that opens popup on click
function ExperienceCard({ experience }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // prevent body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  return (
    <>
      <div 
        className="experience-card-container"
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="experience-card">
          <img src={experience.image} alt={experience.title} />
        </div>
        <div className="experience-card-info">
          <p className="experience-card-company">{experience.company}</p>
          <h3 className="experience-card-title">{experience.title}</h3>
        </div>
      </div>
      
      {isPopupOpen && (
        <ExperiencePopup 
          experience={experience} 
          onClose={() => setIsPopupOpen(false)} 
        />
      )}
    </>
  );
}

export default ExperienceCard;
