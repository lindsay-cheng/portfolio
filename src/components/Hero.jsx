import { contactData, heroData, sectionIds } from '../data';
import './Hero.css';

function Hero() {
  const { name, intro, contactPrefix, photo } = heroData;
  const { local, domain } = contactData.email;
  const displayEmail = `${local} [at] ${domain.replace('.', ' [dot] ')}`;

  const handleEmailClick = () => {
    window.location.href = `mailto:${local}@${domain}`;
  };

  return (
    <section className="hero" id={sectionIds.home}>
      <div className="hero-content">
        <div className="hero-copy reveal-item">
          <h1>{name}</h1>
          <p className="hero-intro">{intro}</p>
          <p className="hero-contact">
            {contactPrefix}
            <button
              type="button"
              className="hero-email-link"
              onClick={handleEmailClick}
            >
              {displayEmail}
            </button>
            .
          </p>
        </div>
        <div className="hero-photo reveal-item" aria-label="Portrait placeholder">
          <img src={photo.src} alt={photo.alt} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
