// Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Akash Bhatta 👋🏿</h1>
      <button
        className="showBtn"
        onClick={() => {
          const section = document.getElementById("project");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        View My Work
      </button>
    </section>
  );
};

export default Hero;

