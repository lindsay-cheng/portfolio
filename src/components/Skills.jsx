import { skillsData } from '../data';
import SectionHeader from './SectionHeader';

function Skills() {
  return (
    <section className="section" id="tech">
      <SectionHeader>Skills</SectionHeader>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

