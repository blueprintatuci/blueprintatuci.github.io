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
        info = "I'm baby dolore meggings readymade put a bird on it kinfolk crucifix jianbing. 
        Tumblr jean shorts viral actually flannel. Copper mug ennui sed vegan brooklyn banjo 
        direct trade consectetur cray. Chambray laborum brunch, williamsburg vice affogato selvage. 
        Direct trade in four dollar toast, authentic skateboard 8-bit shoreditch."
      />
      <OurMissionSection />
      <OurValuesSection />
      <OurTeamSection />
      <Footer />
    </div>
  );
}

export default About;
