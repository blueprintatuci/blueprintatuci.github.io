import React from "react";
import "../../base.css";
import "./Projects.css";
import HeaderSection from "../common/HeaderSection";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import ProjectCard from "../common/ProjectCard";
import "../Home/ProjectSection.css";

function Projects() {
  return (
    <div className='Projects'>
      <Navbar />
      <HeaderSection 
        title = "Projects"
        info = "Hearties long boat crow's nest parrel Pirate Round line yardarm loot coffer 
        stern. Lass plunder furl pillage knave matey jack reef interloper belay. Gangplank 
        dead men tell no tales hulk swab Privateer coffer sheet prow cackle fruit rope's end."
      />
      <div className='body-section'>
        <Button variant='contained' disableElevation href="https://github.com/uciblueprint">
          See our GitHub
        </Button>
        <h1>Current Projects</h1>
        <div className='projects'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <h1>Completed Projects</h1>
        <div className='projects'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;