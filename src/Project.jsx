import React from "react";
import "./Project.css";

const Projects = () => {
  const myProjects = [
    {
      title: "Weather App",
      id : "weather",
      style:{backgroundImage:"url(/weather.png)"},
      link: "https://github.com/akashbhatta/Portfolio/blob/main/public/weather.png",
    },
    {
      title: "Stopwatch",
      id:"timer",
       style:{backgroundImage:"url(/timer.png)"},
      link: "https://github.com/akashbhatta/Portfolio/blob/main/public/timer.png",
    },
    {
     title : "Spotify Web Design",
     id: "spotify",
     style:{backgroundImage:"url(/spotify.png)"},
     link : "https://github.com/akashbhatta/Portfolio/blob/main/public/spotify.png",
    },
    {
      title: "Calculator",
      id:"calculator",
      style:{backgroundImage:"url(/calculator.png)"},
      link: "https://github.com/akashbhatta/Portfolio/blob/main/public/calculator.png",
    },
    {
        
      title: "Scissor-Paper-Rock",
      id:"RPS",
      style:{backgroundImage:"url(/RPS.png)"},
      link: "https://github.com/akashbhatta/Portfolio/blob/main/public/RPS.png"
      

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
