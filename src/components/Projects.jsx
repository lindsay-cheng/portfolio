import { projectsData } from '../data';
import Card from './Card';
import SectionHeader from './SectionHeader';

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="projects-masonry">
        {projectsData.map((project) => (
          <Card key={project.id} item={project} type="project" />
        ))}
      </div>
    </section>
  );
}

export default Projects;

