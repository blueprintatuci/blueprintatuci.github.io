import React from "react";
import "../../base.css";
import "./Projects.css";
import HeaderSection from "../common/HeaderSection";
import Button from "@material-ui/core/Button";
import BlueprintNavbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import ProjectCard from "../common/ProjectCard";
import "../Home/ProjectSection.css";

// Assets
import ethic_logo from "../../assets/ethic_logo.png";

function Projects() {
  return (
    <div className='Projects'>
      <BlueprintNavbar />
      <HeaderSection 
        title = "Projects"
        info = "All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected."
      />
      <div className='body-section'>
        {/* Uncomment below when we have projects we are working on */}
        {/* <h1>Current Projects</h1>
        <div className='projects'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div> */}
        <h1>Completed Projects</h1>
        <div>
          <Button variant='contained' disableElevation href="https://github.com/uciblueprint">
            See our GitHub
          </Button>
        </div>
        <div className='projects'>
          <ProjectCard 
            pic = {ethic_logo}
            title = "Ethic"
            description = "Ethic provides resources to make it easier to live and shop sustainably. We built them a web crawler that provided a central location for Ethic to easily view and promote sustainability resources."
            github_url = "https://github.com/uciblueprint/Ethics-Project-Frontend"
          />
          <ProjectCard 
            pic = {ethic_logo}
            title = "Ethic"
            description = "Ethic provides resources to make it easier to live and shop sustainably. We built them a web crawler that provided a central location for Ethic to easily view and promote sustainability resources."
            github_url = "https://github.com/uciblueprint/Ethics-Project-Frontend"
          />
          <ProjectCard 
            pic = {ethic_logo}
            title = "Ethic"
            description = "Ethic provides resources to make it easier to live and shop sustainably. We built them a web crawler that provided a central location for Ethic to easily view and promote sustainability resources."
            github_url = "https://github.com/uciblueprint/Ethics-Project-Frontend"
          />
          {/* <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
