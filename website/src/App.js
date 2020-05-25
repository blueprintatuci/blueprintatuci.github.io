import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
