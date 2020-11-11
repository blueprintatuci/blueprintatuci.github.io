import React from "react";
import "../../base.css";
import "./Projects.css";
import HeaderSection from "../common/HeaderSection";
import Button from "@material-ui/core/Button";
import Footer from "../Page/Footer";
import ProjectCard from "../common/ProjectCard";
import "../Home/ProjectSection.css";

// Assets
import ethic_logo from "../../assets/ethic_logo.png";
import growth from "../../assets/growth-mindset.svg";
import raise_logo from "../../assets/raise-foundation-logo.png";

function Projects() {
  return (
    <div className='Projects'>
      <HeaderSection
        title="Projects"
        info="All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected."
      />
      <div className='body-section'>
        <div>
          <Button variant='contained' disableElevation href="https://github.com/blueprintatuci">
            See our GitHub
          </Button>
        </div>
        <h1>Current Projects</h1>
        <div className='projects'>
          <ProjectCard 
            pic={raise_logo}
            title="The Raise Foundation"
            description="The Raise Foundation aims to prevent child abuse through education, advocacy, and family services. We're enabling child-serving professionals to receive training remotely through an online training portal."
            /* TODO: Change link once we have the repo set up */
            github_url="https://github.com/blueprintatuci"
          />
          <ProjectCard
            pic={growth}
            title="Coming Soon"
            description="Coming Soon"
            github_url="https://github.com/blueprintatuci/"
          />
          <ProjectCard
            pic={growth}
            title="Coming Soon"
            description="Coming Soon"
            github_url="https://github.com/blueprintatuci/"
          />
        </div>
        <h1>Completed Projects</h1>
        <div className='projects'>
          <ProjectCard
            pic={ethic_logo}
            title="Ethic"
            description="Ethic provides resources to make it easier to live and shop sustainably. We built them a web crawler that provided a central location for Ethic to easily view and promote sustainability resources."
            github_url="https://github.com/blueprintatuci/Ethics-Project-Frontend"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
