import { useEffect, useRef } from 'react';
import { resolveProjectMedia } from '../lib/resolveProjectMedia';

function ProjectCardMedia({ project }) {
  const media = resolveProjectMedia(project);
  const videoRef = useRef(null);
  const isVideo = media.kind === 'video';

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play?.();
          } else {
            video.pause?.();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isVideo]);

  const mediaClass = [
    'project-card__media',
    media.presentation === 'letterbox' ? 'project-card__media--letterbox' : '',
    media.presentation === 'cover' ? 'project-card__media--cover' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const style =
    media.presentation === 'letterbox' && media.backgroundSrc
      ? { '--letterbox-bg': `url(${media.backgroundSrc})` }
      : undefined;

  return (
    <div className={mediaClass} style={style}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={media.src}
          poster={media.poster}
          muted
          playsInline
          loop
          preload="auto"
          aria-label={`${media.label} preview video`}
        />
      ) : (
        <img src={media.src} alt={media.label} />
      )}
    </div>
  );
}

export default ProjectCardMedia;
