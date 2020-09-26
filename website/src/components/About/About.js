import React from "react";
import HeaderSection from "../common/HeaderSection";
import OurMissionSection from "./OurMissionSection"
import OurValuesSection from "./OurValuesSection"
import OurTeamSection from "./OurTeamSection"
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import "../../base.css";
import './About.css'

function About() {
  return (
    <div className='About'>
      <Navbar />
      <HeaderSection 
        title = 'About Us'
        info = "Blueprint at UCI is a community-service organization dedicated
        to making a positive social impact for a variety of nonprofit organizations 
        by innovating and building intuitive technology while giving the opportunity
        to students to learn and utilize agile development."
      />
      <OurMissionSection />
      <OurValuesSection />
      <OurTeamSection />
      <Footer />
    </div>
  );
}

export default About;
