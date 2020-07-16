import React from "react";
import "./ProjectSection.css";
import ProjectCard from "../common/ProjectCard";

export default function Project() {
  return (
    <div className='project-section'>
      <h1 className='title'> Our Projects</h1>
      <p className='main-text'>
      Each quarter, our team works closely with a non-profit organization to develop software that will help them better serve their communities. 
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
