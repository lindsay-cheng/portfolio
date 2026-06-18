import { experiencesData } from '../data';
import ExperienceCard from './ExperienceCard';
import SectionHeader from './SectionHeader';
import './Experience.css';

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader>Work Experience</SectionHeader>
      <div className="experience-list">
        {experiencesData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
