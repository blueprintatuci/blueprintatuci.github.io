import React from "react";
import "./AboutSection.css";
import "../../base.css";
//import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
  return (
    <div className='about'>
      <h1 className='title'> About</h1>
      <p className='main-text'>
        Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare. 
      </p>
      <p className='extra-text'>
          At Blueprint, we are dedicated and driven to develop pro bono apps for nonprofits and promote tech for social good, free of charge. 
          Blueprint is a international organization founded in 2012 at UC Berkeley. 
      </p>
      <a className="about-link" href="/about">Read More...</a>
    </div>
  );
}
