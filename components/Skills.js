import React from 'react';

const skills = [
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "CSS", level: 75 },
    { name: "HTML", level: 85 },
     { name: "Python", level: 80 },
      { name: "C/C++", level: 90 }

];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
