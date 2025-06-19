import React from "react";
import "./Project.css";

const Projects = () => {
  const myProjects = [
    {
      title: "Weather App",
      id : "weather",
      link: "https://akashbhatta.github.io/Weather/",
      style:{backgroundImage:"url(/weather.png)"},
    },
    {
      title: "Stopwatch",
      id:"timer",
       style:{backgroundImage:"url(/timer.png)"},
      link: "https://akashbhatta.github.io/Timer/",
    },
    {
     title : "Spotify Web Design",
     id: "spotify",
     style:{backgroundImage:"url(/spotify.png)"},
     link : "https://akashbhatta.github.io/Spotify_WebDesign/",
    },
    {
      title: "Calculator",
      id:"calculator",
      style:{backgroundImage:"url(/calculator.png)"},
      link: "https://akashbhatta.github.io/Calculator/",
    },
    {
        
      title: "Scissor-Paper-Rock",
      id:"RPS",
      style:{backgroundImage:"url(/RPS.png)"},
      link: "https://akashbhatta.github.io/Rock_Paper_Scissor/"
      

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
