import React from "react";
import Header from "../Page/Header";
import AboutSection from "./AboutSection";
import Navbar from "../Page/Navbar";
import Project from "./ProjectSection";
import Footer from "../Page/Footer";

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Header />
      <AboutSection />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
