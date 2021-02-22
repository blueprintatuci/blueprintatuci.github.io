import React from "react";
import "./ProjectSection.css";
import ProjectCard from "../common/ProjectCard";

// Assets
import dreams_logo from "../../assets/npos/dreams_logo.png";
import forest_logo from "../../assets/npos/forest_logo.png";
import raise_logo from "../../assets/npos/raise-foundation-logo.png";

export default function Project() {
  return (
    <div className='project-section'>
      <h1 className='title'> Our Projects</h1>
      <p className='main-text'>
        Each quarter, our team works closely with a non-profit organization to develop 
        software that will help them better serve their communities. 
      </p>
      <p className="project-link">Check out our most recent projects!</p>
      <div className='projects'>
        <ProjectCard 
          pic={raise_logo}
          title="The Raise Foundation"
          description="The Raise Foundation aims to prevent child abuse through education, advocacy, and family services. We're enabling child-serving professionals to receive training remotely through an online training portal."
          github_url="https://github.com/blueprintatuci/the-raise-foundation-training-portal"
        />
        <ProjectCard
          pic={dreams_logo}
          title="Dreams for Schools"
          description="Dreams for Schools was established to inspire, create and educate students to be STEM literate with hard and soft skills needed to become the critical thinkers, creative leaders, and technologists of tomorrow. We're building a judging platform for their showcases for programs. "
          github_url="https://github.com/blueprintatuci/"
        />
        <ProjectCard
          pic={forest_logo}
          title="Our City Forest"
          description="Our mission is to cultivate a green and healthy Silicon Valley by engaging community members in the appreciation, protection, growth and maintenance of our urban ecosystem, especially our urban forest. We're creating an online management tool for their volunteers and events."
          github_url="https://github.com/blueprintatuci/"
        />
      </div>
    </div>
  );
}
