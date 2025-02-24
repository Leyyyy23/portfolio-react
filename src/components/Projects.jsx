import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern web application built with React and Node.js, featuring real-time data synchronization and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/yourusername/project-alpha",
      live: "https://project-alpha.com",
      image: "/leo.jpg"
    },
    {
      title: "Beta Dashboard",
      description: "Analytics dashboard with interactive charts and data visualization tools for business intelligence.",
      tech: ["React", "D3.js", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/beta-dashboard",
      live: "https://beta-dashboard.com",
      image: "/leo.jpg"
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
