import React from 'react';

const experiences = [
  {
    company: "icodice",
    role: "Data analyst",
    period: "2023 - Present",
    description: "Overjet төсөлд ажилласан, 2D зурагнаас 3D объект үүсгэх судалгааны ажил хийсэн."
  },
  {
    company: "BDSec",
    role: "Intern",
    period: "2024",
    description: "BDSec компаний вэб сайт дээр ажилласан."
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '50px 0', backgroundColor: '#f0f0f0' }}>
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <h3>{exp.role} - {exp.company}</h3>
            <span style={{ fontStyle: 'italic', color: '#666' }}>{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
