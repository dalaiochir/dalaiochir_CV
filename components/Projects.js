import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    name: "Personal Portfolio",
    image: "/project1.png",
    description: "Next.js ашиглан өөрийн CV сайтын хөгжүүлэлт."
  },
  {
    name: "Task Manager App",
    image: "/project2.png",
    description: "React + Node.js ашиглан Task Management веб апп."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.name} />
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
};

export default Projects;
