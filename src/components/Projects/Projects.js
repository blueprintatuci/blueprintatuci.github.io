import React from "react";
import "../../base.css";
import "./Projects.css";
import HeaderSection from "../common/HeaderSection";
import Button from "@material-ui/core/Button";
import Footer from "../Page/Footer";
import ProjectCard from "../common/ProjectCard";
import "../Home/ProjectSection.css";

// Assets
import ethic_logo from "../../assets/npos/ethic_logo.png";
import dreams_logo from "../../assets/npos/dreams_logo.png";
import forest_logo from "../../assets/npos/forest_logo.png";
import raise_logo from "../../assets/npos/raise-foundation-logo.png";

function Projects() {
  return (
    <div className='Projects'>
      <HeaderSection
        title="Projects"
        info="Majority of Blueprint’s work is open source because we believe in building technology that makes us more open and connected."
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
