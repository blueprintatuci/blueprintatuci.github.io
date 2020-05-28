import React from "react";
import AboutUsSection from "./AboutUsSection";
import Navbar from "../Page/Navbar";
import Footer from "../Page/Footer";
import "../../base.css";

//import { makeStyles } from "@material-ui/core/styles";

function About() {
  return (
    <div className='About'>
      <Navbar />
      <AboutUsSection />
      <Footer />
    </div>
  );
}

export default About;
