import { heroData, sectionIds } from '../data';
import { scrollToId } from '../lib/scrollToId';
import './Hero.css';

function Hero() {
  const { name, thesis, about, photo } = heroData;

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
              {about.afterEducationLink}
            </p>
          </div>
        </div>
        <div className="hero-photo reveal-item" aria-label="Portrait placeholder">
          <img src={photo.src} alt={photo.alt} fetchPriority="high" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
