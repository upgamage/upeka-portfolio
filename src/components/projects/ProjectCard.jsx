
import {
  Boxes,
  Orbit,
  Wallet,
  Route,
  ArrowUpRight,
  Code2,
} from 'lucide-react';

import './ProjectCard.css';

/*
========================================
PROJECT ICON CONFIGURATION
========================================

Lucide React does not include official
LinkedIn and GitHub brand logos.

These are generic project icons instead.
*/

const projectIcons = {
  boxes: Boxes,
  orbit: Orbit,
  wallet: Wallet,
  route: Route,
};

function ProjectCard({ project }) {

  // Select the icon based on the project data.
  const Icon = projectIcons[project.icon] || Code2;

  return (
    <article className="project-card">

      {/* ========================================
          PROJECT COVER
      ======================================== */}

      <div className={`project-cover ${project.coverStyle}`}>

        <div className="project-cover-top">
          <span className="project-category-label">
            {project.category[0]}
          </span>

          <span className="project-status">
            {project.status}
          </span>
        </div>

        <div className="project-cover-icon">
          <Icon size={54} strokeWidth={1.3} />
        </div>

        <span className="project-cover-name">
          {project.title}
        </span>

      </div>


      {/* ========================================
          PROJECT INFORMATION
      ======================================== */}

      <div className="project-card-content">

        <div className="project-card-heading">

          <h2>{project.title}</h2>

          {project.featured && (
            <span className="featured-label">
              Featured
            </span>
          )}

        </div>

        <p className="project-description">
          {project.shortDescription}
        </p>


        {/* Project technologies */}
        <div className="project-technologies">

          {project.technologies.map((technology) => (
            <span
              className="technology-tag"
              key={technology}
            >
              {technology}
            </span>
          ))}

        </div>


        {/* External project links appear only when URLs exist */}
        {(project.github || project.demo) && (
          <div className="project-card-actions">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link"
              >
                <Code2 size={16} />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-link"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}

          </div>
        )}

      </div>

    </article>
  );
}

export default ProjectCard;
