import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './ExperienceCard.css';

function ExperienceCard({ experience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const poster = experience?.poster;
  const hasPoster = Boolean(poster?.src?.trim());

  return (
    <div className={`experience-row reveal-item${isExpanded ? ' is-expanded' : ''}`}>
      <button
        type="button"
        className="experience-row-header"
        onClick={() => setIsExpanded((open) => !open)}
        aria-expanded={isExpanded}
        aria-controls={`experience-panel-${experience.id}`}
      >
        <div className="experience-row-logo">
          <img src={experience.image} alt="" />
        </div>
        <div className="experience-row-main">
          <span className="experience-row-company">{experience.company}</span>
          <span className="experience-row-title">{experience.title}</span>
          {experience.location && (
            <span className="experience-row-location">{experience.location}</span>
          )}
        </div>
        <span className="experience-row-period">{experience.period}</span>
        <ChevronRight
          size={18}
          className="experience-row-chevron"
          aria-hidden="true"
        />
      </button>

      <div
        id={`experience-panel-${experience.id}`}
        className="experience-row-panel"
        aria-hidden={!isExpanded}
      >
        <div className="experience-row-panel-inner">
          <p className="experience-row-description">{experience.description}</p>
          {experience.tags && (
            <div className="experience-row-tags">
              {experience.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
          {hasPoster && (
            <figure className="experience-row-poster">
              <img
                src={poster.src}
                alt={poster.alt || 'Research poster'}
              />
              {poster.caption && (
                <figcaption className="experience-row-poster-caption">
                  {poster.caption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
