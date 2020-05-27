import React from "react";
import "./AboutSection.css";
import "../../base.css";
//import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
  return (
    <div className='about'>
      <h1 className='title'> About</h1>
      <p className='main-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <p className='extra-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
      <p>Read More...</p>
    </div>
  );
}
