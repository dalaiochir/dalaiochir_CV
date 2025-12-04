import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{project.name}</h3>
        <img src={project.image} alt={project.name} />
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;
