import { skillsData } from '../data';
import SectionHeader from './SectionHeader';
import './Skills.css';

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeader compact>Skills</SectionHeader>
      <div className="skills-grid">
        {skillsData.map((category) => (
          <div key={category.category} className="skill-category reveal-item">
            <h3 className="skill-category-title">{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="tag">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
