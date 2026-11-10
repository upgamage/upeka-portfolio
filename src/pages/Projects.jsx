
import { useMemo, useState } from 'react';
import { Search, X, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectCard from '../components/projects/ProjectCard';

import {
  projects,
  projectCategories,
} from '../data/projects';

import './Projects.css';

function Projects() {

  // Selected project category.
  const [activeCategory, setActiveCategory] =
    useState('All Projects');

  // Project search input.
  const [searchQuery, setSearchQuery] =
    useState('');


  /*
  ========================================
  PROJECT FILTERING
  ========================================

  useMemo recalculates the filtered project list
  when the category or search query changes.

  We check:
  1. Whether the project belongs to the selected category.
  2. Whether its title, description or technologies
     match the search query.
  */

  const filteredProjects = useMemo(() => {

    const normalizedQuery = searchQuery
      .trim()
      .toLowerCase();

    return projects.filter((project) => {

      // Category filter
      const matchesCategory =
        activeCategory === 'All Projects' ||
        project.category.includes(activeCategory);

      // Search filter
      const searchableContent = [
        project.title,
        project.shortDescription,
        ...project.technologies,
        ...project.category,
      ].join(' ').toLowerCase();

      const matchesSearch =
        searchableContent.includes(normalizedQuery);

      return matchesCategory && matchesSearch;

    });

  }, [activeCategory, searchQuery]);


  // Clear the current search.
  const handleClearSearch = () => {
    setSearchQuery('');
  };


  return (
    <div className="projects-page">

      {/* ========================================
          01. PROJECT HERO
      ======================================== */}

      <section className="projects-hero container">

        <span className="projects-eyebrow">
          MY WORK & EXPERIENCE
        </span>

        <h1>
          Projects & <span>Engineering Work.</span>
        </h1>

        <p>
          A collection of applications, systems and technical
          projects I've developed while exploring software
          engineering, solving problems and building practical solutions.
        </p>

        <div className="projects-hero-meta">
          <span>
            {projects.length} Projects
          </span>

          <span className="meta-divider"></span>

          <span>
            Software Engineering
          </span>
        </div>

      </section>


      {/* ========================================
          02. PROJECT COLLECTION
      ======================================== */}

      <section className="projects-collection container">

        <div className="projects-section-heading">

          <div>
            <span className="projects-eyebrow">
              PROJECT COLLECTION
            </span>

            <h2>Explore my work.</h2>
          </div>

          <p>
            Explore projects by category or search
            for a specific technology.
          </p>

        </div>


        {/* ========================================
            SEARCH BAR
        ======================================== */}

        <div className="projects-search-wrapper">

          <Search size={19} />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(event.target.value)
            }
            placeholder="Search projects or technologies..."
            aria-label="Search projects or technologies"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="clear-search-button"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}

        </div>


        {/* ========================================
            CATEGORY FILTERS
        ======================================== */}

        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by category"
        >

          {projectCategories.map((category) => (

            <button
              key={category}
              type="button"
              className={`filter-button ${
                activeCategory === category ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>

          ))}

        </div>


        {/* ========================================
            PROJECT RESULTS
        ======================================== */}

        <div className="projects-results-heading">

          <p aria-live="polite">
            Showing <strong>{filteredProjects.length}</strong>{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          {(searchQuery || activeCategory !== 'All Projects') && (
            <button
              type="button"
              className="reset-filters-button"
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
            >
              Reset filters
            </button>
          )}

        </div>


        {/* Project grid or empty state */}
        {filteredProjects.length > 0 ? (

          <div className="projects-grid">

            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        ) : (

          <div className="projects-empty-state">

            <FolderOpen size={42} strokeWidth={1.3} />

            <h3>No projects found</h3>

            <p>
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
            >
              Clear filters
            </button>

          </div>

        )}

      </section>


      {/* ========================================
          03. CONTACT CTA
      ======================================== */}

      <section className="projects-contact">

        <div className="container projects-contact-content">

          <span className="projects-eyebrow">
            HAVE AN IDEA?
          </span>

          <h2>
            Let's build something meaningful.
          </h2>

          <p>
            Interested in working together or discussing
            a project? I'd be happy to connect.
          </p>

          <Link
            to="/contact"
            className="projects-contact-button"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Projects;
