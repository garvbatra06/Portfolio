import React from 'react'
import './Pages.css'

const projects = [
  {
    title: 'My Portfolio Website',
    description:
      'This very portfolio — built to showcase my journey, skills, and projects as I explore web dev and AI.',
    tech: ['React', 'Framer Motion', 'CSS'],
    link: '#',
  },
  {
    title: 'Eminence Website',
    description:
      'A professional event website for Eminence by JBS, showcasing speakers, innovation reports, and updates.',
    tech: ['Framer'],
    link: '#',
  },
  {
    title: 'The Consulting Club Website',
    description:
      'Official website for The Consulting Club at JIIT featuring events, volunteer info, and club capabilities overview.',
    tech: ['Framer'],
    link: '#',
  },
  {
    title: 'Curie Temperature Alarm Project',
    description:
      'Simulates a ball dropping when Curie temperature is reached, using HTML, CSS, and JS.',
    tech: ['HTML', 'CSS', 'JS'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-used">{project.tech.join(' | ')}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Projects;