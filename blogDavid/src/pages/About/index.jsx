import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML/CSS",
    "TypeScript",
    "Node.js",
    "Git",
    "Vite",
    "Responsive Design",
  ];

  return (
    <div className="about-page">
      <h1>Sobre Mim</h1>

      <div className="about-content">
        <p>
          Olá! Sou David Reis, estudante de desenvolvimento web no quarto
          semestre. Este blog foi criado como parte de um projeto da disciplina
          de Frameworks Frontend.
        </p>

        <p>
          Aqui compartilho conhecimentos sobre desenvolvimento web, dicas de
          carreira e experiências de aprendizado com React e outras tecnologias
          frontend.
        </p>
      </div>

      <div className="skills-section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="contact-info">
        <h2>Contato</h2>
        <p>
          <strong>Email:</strong> david.reis@exemplo.com
        </p>
        <p>
          <strong>GitHub:</strong> github.com/davidreis
        </p>
        <p>
          <strong>LinkedIn:</strong> linkedin.com/in/davidreis
        </p>
      </div>
    </div>
  );
};

export default About;
