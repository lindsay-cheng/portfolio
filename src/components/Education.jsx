import { educationData } from '../data';
import SectionHeader from './SectionHeader';
import './Education.css';

function Education() {
  const { school, subtitle, awards, period, gpa, image } = educationData;

  return (
    <section className="section" id="education">
      <SectionHeader compact>Education</SectionHeader>
      <div className="education-container reveal-item">
        <div className="education-thumb">
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </div>
        <div className="education-content">
          <div className="education-main">
            <h3>{school}</h3>
            <p className="education-subtitle">{subtitle}</p>
            <p className="education-awards">{awards}</p>
          </div>
          <div className="education-meta">
            <p className="education-period">{period}</p>
            <p className="education-degree">{gpa}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
