import React from "react";
import Header from "./Header";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";
import Project from "./ProjectSection";
import Footer from "./Footer";
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
