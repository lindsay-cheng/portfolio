import { projectsData } from '../data';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import './Projects.css';

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div className="projects-list">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
