import React from "react";
import "./ProjectSection.css";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className='project-section'>
      <h1 className='title'> Our Projects</h1>
      <p className='main-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <p className='extra-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <p>Check out our current projects!</p>
      <div className='projects'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
