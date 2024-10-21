import React from 'react';
import '../styles/Experience.scss';

function Experience() {
  const experiences = [
    { title: 'Frontend Developer', company: 'RSSPA IT Solutions', duration: '(June - Sep)2024 ' },
    { title: 'Intern', company: 'FacePrep', duration: 'june-2023 to august-2023' },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.title} at {exp.company}</h3>
            <p>{exp.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
