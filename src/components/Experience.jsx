import { experiencesData } from '../data';
import ExperienceCard from './ExperienceCard';
import SectionHeader from './SectionHeader';

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeader>Experience</SectionHeader>
      <div className="card-grid">
        {experiencesData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;

