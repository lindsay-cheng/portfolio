// reusable card component for experience and projects
import { useRef, useEffect } from 'react';

function Card({ item, type = 'experience' }) {
  const isExperience = type === 'experience';
  const media = item?.media;
  const hasVideo = media?.type === 'video' && media?.src && media.src.trim() !== "";
  const videoRef = useRef(null);

  // use intersection observer to play/pause video when in/out of view
  useEffect(() => {
    if (!hasVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play?.();
          } else {
            videoRef.current?.pause?.();
          }
        });
      },
      { threshold: 0.5 } // play when 50% visible
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasVideo]);
  
  return (
    <div className="card">
      <div className="card-image">
        {hasVideo ? (
          <video
            ref={videoRef}
            src={media.src}
            poster={media.poster}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            aria-label={`${item.title} preview video`}
          />
        ) : (
          <img src={item.image} alt={item.title} />
        )}
      </div>
      <div className="card-content">
        <h3>{item.title}</h3>
        {isExperience && (
          <>
            <p className="card-subtitle">{item.company}</p>
            <p className="card-meta">{item.period}</p>
            {item.location && <p className="card-meta">{item.location}</p>}
          </>
        )}
        <p className="card-description">{item.description}</p>
        {item.tags && (
          <div className="card-tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="card-actions">
          {item.githubLink && (
            <a 
              href={item.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-button"
            >
              <img src="assets/icons/github-icon.png" alt="GitHub" />
              <span>View on Github</span>
            </a>
          )}
          {item.link && item.link.trim() !== "" && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link">
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
