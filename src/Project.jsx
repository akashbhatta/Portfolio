import React from "react";
import "./Project.css";

const Projects = () => {
  const myProjects = [
    {
      title: "Weather App",
    
      link: "https://akash0077-tech.github.io/Weather/",
    },
    {
      title: "Stopwatch",
      
      link: "https://akash0077-tech.github.io/Timer/",
    },

  ];

  return (
    <section className="projects" id = "project">
      <h2>My Projects</h2>
      <div className="project-grid">
        {myProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
