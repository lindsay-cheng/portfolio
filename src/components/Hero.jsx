import { useRef, useState } from 'react';
import { ChevronRight, Music } from 'lucide-react';
import { heroData, sectionIds } from '../data';
import { scrollToId } from '../lib/scrollToId';
import MusicDisclosure, { MUSIC_PANEL_ID } from './MusicDisclosure';
import './Hero.css';

function Hero() {
  const { name, thesis, about, photo } = heroData;
  const [musicOpen, setMusicOpen] = useState(false);
  const pianoTriggerRef = useRef(null);

  return (
    <section className="hero" id={sectionIds.home}>
      <div className="hero-content">
        <div className="hero-copy reveal-item">
          <h1>{name}</h1>
          <p className="hero-thesis">{thesis}</p>
          <div className="hero-about-block" id={sectionIds.about}>
            <h2>{about.heading}</h2>
            <p>
              {about.beforeEducationLink}
              <button
                type="button"
                className="hero-about-link"
                onClick={() => scrollToId(sectionIds.education)}
              >
                {about.educationLinkText}
              </button>
              {about.afterEducationLinkBeforePiano}
              <button
                type="button"
                ref={pianoTriggerRef}
                className="hero-about-link hero-piano-link"
                aria-expanded={musicOpen}
                aria-controls={MUSIC_PANEL_ID}
                onClick={() => setMusicOpen((o) => !o)}
              >
                <span className="hero-piano-link-highlight">
                  <Music size={13} className="hero-piano-glyph" aria-hidden="true" />
                  <span>{about.pianoLinkText}</span>
                </span>
                <ChevronRight size={14} className="hero-piano-icon" aria-hidden="true" />
              </button>
              {about.afterPianoLink}
            </p>
          </div>
        </div>
        <div className="hero-photo reveal-item" aria-label="Portrait placeholder">
          <img src={photo.src} alt={photo.alt} />
        </div>
        <MusicDisclosure
          open={musicOpen}
          onOpenChange={setMusicOpen}
          triggerRef={pianoTriggerRef}
        />
      </div>
    </section>
  );
}

export default Hero;
