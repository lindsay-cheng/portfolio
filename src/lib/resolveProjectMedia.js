/**
 * @param {import('../data').Project} project
 * @returns {{
 *   kind: 'video' | 'image',
 *   src: string,
 *   poster?: string,
 *   presentation: import('../data').MediaPresentation,
 *   backgroundSrc?: string,
 *   label: string,
 * }}
 */
export function resolveProjectMedia(project) {
  const media = project.media;
  const videoSrc = media?.type === 'video' ? media.src?.trim() : '';
  const imageSrc = project.image?.trim?.() || '';

  if (videoSrc) {
    return {
      kind: 'video',
      src: videoSrc,
      poster: media.poster?.trim?.() || undefined,
      presentation: media.presentation || 'intrinsic',
      backgroundSrc: media.backgroundSrc?.trim?.() || undefined,
      label: project.title,
    };
  }

  return {
    kind: 'image',
    src: imageSrc,
    presentation: 'intrinsic',
    label: project.title,
  };
}
