import React from "react";
import "./Navbar.css";
import "../../base.css";
import blueprint_logo from "../../assets/blueprint_logo_only.png";
import { Link } from "react-router-dom";

//import { makeStyles } from "@material-ui/core/styles";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="homeLink navbar">
          <Link style={{ textDecoration: 'none' }} to='/'>
            < img src={blueprint_logo} alt='blueprint-logo' />
            <div>blueprint</div>
          </Link>
    </div>
      <div className='links'>
        <Link style={{ textDecoration: 'none' }} to='/about'>
          <p>About</p>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/projects'>
          <p>Projects</p>
        </Link >
        <Link style={{ textDecoration: 'none' }} to='/contact'>
        <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
