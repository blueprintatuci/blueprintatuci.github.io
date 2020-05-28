import React from "react";
import AboutUsSection from "./AboutUsSection";
import OurMissionSection from "./OurMissionSection"
import OurValuesSection from "./OurValuesSection"
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import "../../base.css";

function About() {
  return (
    <div className='About'>
      <Navbar />
      <AboutUsSection />
      <OurMissionSection />
      <OurValuesSection />
      <Footer />
    </div>
  );
}

export default About;
