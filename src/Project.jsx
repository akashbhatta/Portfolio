import React from "react";
import "./Project.css";

const Projects = () => {
  const myProjects = [
    {
      title: "Weather App",
      id : "weather",
      style:{backgroundImage:"url(public/weather.png)"},
      link: "https://akash0077-tech.github.io/Weather/",
    },
    {
      title: "Stopwatch",
      id:"timer",
       style:{backgroundImage:"url(public/timer.png)"},
      link: "https://akash0077-tech.github.io/Timer/",
    },
    {
     title : "Spotify Web Design",
     id: "spotify",
     style:{backgroundImage:"url(public/spotify.png)"},
     link : "https://akash0077-tech.github.io/Spotify_WebDesign/"
    },
    {
      title: "Calculator",
      id:"calculator",
      style:{backgroundImage:"url(public/calculator.png)"},
      link: "https://akash0077-tech.github.io/Calculator/"
    },
    {
        
      title: "Scissor-Paper-Rock",
      id:"RPS",
      style:{backgroundImage:"url(public/RPS.png)"},
      link: "https://akash0077-tech.github.io/Rock_Paper_Scissor/"
      

    },

  

  ];

  return (
    <section id ="project">
      <h2>Projects</h2>
      <div className="project-grid">
        {myProjects.map((project, index) => (
          <div className="project-card" 
          key={index}
          style={project.style}
          >
        
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
