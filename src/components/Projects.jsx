import Masonry from 'react-masonry-css';
import { projectsData } from '../data';
import Card from './Card';
import SectionHeader from './SectionHeader';

const breakpointColumns = {
  default: 2,
  768: 1
};

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeader>Projects</SectionHeader>
      <Masonry
        breakpointCols={breakpointColumns}
        className="projects-masonry"
        columnClassName="projects-masonry-column"
      >
        {projectsData.map((project) => (
          <Card key={project.id} item={project} type="project" />
        ))}
      </Masonry>
    </section>
  );
}

export default Projects;

