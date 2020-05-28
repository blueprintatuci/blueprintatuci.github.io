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
        <Link style={{ textDecoration: 'none' }} to='/about'>
          <p>About</p>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/project'>
          <p>Projects</p>
        </Link >
        <Link style={{ textDecoration: 'none' }} to='/'>
        <p>Contact</p>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/'>
        <p>Apply</p>
        </Link>
      </div>
    </div>
  );
}