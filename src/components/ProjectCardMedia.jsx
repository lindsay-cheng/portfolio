import { useEffect, useRef, useState } from 'react';
import { resolveProjectMedia } from '../lib/resolveProjectMedia';

function ProjectCardMedia({ project }) {
  const media = resolveProjectMedia(project);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isVideo = media.kind === 'video';
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!isVideo || !containerRef.current) return;

    const container = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            videoRef.current?.play?.();
          } else {
            videoRef.current?.pause?.();
          }
        });
      },
      { rootMargin: '200px', threshold: 0.25 }
    );

    observer.observe(container);
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
    <div ref={containerRef} className={mediaClass} style={style}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={shouldLoadVideo ? media.src : undefined}
          poster={media.poster}
          muted
          playsInline
          loop
          preload="none"
          aria-label={`${media.label} preview video`}
        />
      ) : (
        <img src={media.src} alt={media.label} loading="lazy" decoding="async" />
      )}
    </div>
  );
}

export default ProjectCardMedia;
