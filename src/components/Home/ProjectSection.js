import React from "react";
import "./ProjectSection.css";
import ProjectCard from "../common/ProjectCard";

// Assets
import ethic_logo from "../../assets/ethic_logo.png"
import growth from "../../assets/growth-mindset.svg";

export default function Project() {
  return (
    <div className='project-section'>
    <h1 className='title'> Our Projects</h1>
    <p className='main-text'>
    Each quarter, our team works closely with a non-profit organization to develop software that will help them better serve their communities. 
    </p>
    <p className="project-link">Check out our most recent projects!</p>
    <div className='projects'>
        <ProjectCard 
          pic = {ethic_logo}
          title = "Ethic"
          description = "Ethic provides resources to make it easier to live and shop sustainably. We built them a web crawler that provided a central location for Ethic to easily view and promote sustainability resources."
          github_url = "https://github.com/uciblueprint/Ethics-Project-Frontend"
        />
        <ProjectCard 
          pic = {growth}
          title = "Coming Soon"
          description = "Coming Soon"
          github_url = "https://github.com/uciblueprint/"
        />
        <ProjectCard 
          pic = {growth}
          title = "Coming Soon"
          description = "Coming Soon"
          github_url = "https://github.com/uciblueprint/"
        />
      </div>
    </div>
  );
}
