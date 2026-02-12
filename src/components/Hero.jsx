import { contactData } from '../data';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p>Hey! I'm</p>
        <div className="name-container">
          <h1>{contactData.name}</h1>
        </div>
        <p>{contactData.title} @ UofT</p>
      </div>
    </section>
  );
}

export default Hero;

