import React from 'react';
import '../styles/Education.scss';

function Education() {
  const education = [
    { degree: 'Bachelor of Technology', field: 'Electronics and Communication', year: '2023', CGPA: 7.1 },
    {degree: 'Intermediate', field: 'MPC', year: '2019', CGPA: 9.4},
    { degree: 'High School', field: 'SSC', year: '2017', CGPA: 8.7 },
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.field}</p>
            <p>Graduation Year: {edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
