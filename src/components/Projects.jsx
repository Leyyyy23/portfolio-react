import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Scientific Calculator",
      description: "A modern scientific calculator built with React and Vite, featuring advanced mathematical functions, responsive design, and intuitive user interface.",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/yourusername/scical-react",
      live: "https://reactscical-aquino-samson.netlify.app",
      image: "/react (2).jpeg"
    },
    {
      title: "Pokemon",
      description: "An interactive Pokemon application using the PokeAPI, allowing users to search, filter, and view detailed information about Pokemon with a clean and responsive interface.",
      tech: ["React", "Vite", "PokeAPI", "CSS", "Axios"],
      github: "https://github.com/Leyyyy23/pokedex",
      live: "https://pokemon-explorer-app.netlify.app",
      image: "/react (1).jpeg"
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-line"></div>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
