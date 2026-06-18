import ProjectCardMedia from './ProjectCardMedia';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal-item">
      <ProjectCardMedia project={project} />
      <div className="project-card__content">
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        {project.tags?.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
        {project.githubLink && (
          <div className="project-card__actions">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-action-link"
            >
              View on GitHub →
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
