import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.scss';

function Projects() {
  const navigate = useNavigate();

  const projects = [
    { title: 'tic-tac-tea game', description: 'A personal portfolio website built using React.' },
    { title: 'User Details', description: 'View detailed information about users.' },
  ];

  const handleCardClick = (projectTitle) => {
    if (projectTitle === 'User Details') {
      navigate('/user-details'); // Use navigate as a function
    }
    if(projectTitle === 'tic-tac-tea game'){
      navigate('/game');
    }
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleCardClick(project.title)}
            // Handle click event
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
