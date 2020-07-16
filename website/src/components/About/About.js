import React from "react";
import HeaderSection from "../common/HeaderSection";
import OurMissionSection from "./OurMissionSection"
import OurValuesSection from "./OurValuesSection"
import OurTeamSection from "./OurTeamSection"
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import "../../base.css";

function About() {
  return (
    <div className='About'>
      <Navbar />
      <HeaderSection 
        title = 'About Us'
        info = "We are a group of passionate students at Univerity of California Irvine that develop technology for social good"
      />
      <OurMissionSection />
      <OurValuesSection />
      <OurTeamSection />
      <Footer />
    </div>
  );
}

export default About;
