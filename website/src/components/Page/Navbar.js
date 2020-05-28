import React from "react";
import "./Navbar.css";
import "../../base.css";
import blueprint_logo from "../../assets/blueprint_logo.png";
import { Link } from "react-router-dom";

//import { makeStyles } from "@material-ui/core/styles";

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={blueprint_logo} alt='blueprint-logo' />
      <div className='links'>
        <Link to='/about'>
          <p>About</p>
        </Link>
        <Link to='/project'>
          <p>Project</p>
        </Link>
        <Link to='/contact'>
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
}
