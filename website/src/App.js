import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact"
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/project' exact component={Project} />
        <Route path='/contact' exact component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
