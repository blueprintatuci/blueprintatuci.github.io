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
      <p>
        At Blueprint, we are dedicared and driven to develop pro bono apps for nonprofits and promotes tech for social good, free of charge. 
      </p>
      <p>
        Blueprint is a national organization founded in 2012 at the UC Berkeley. UC Irvine is the fourth established chapter, founded in 2019 after University of Waterloo and UCLA.
      </p>
      </p>
      <a className="about-link" href="/about">Read More...</a>
  </div>
  );
}
