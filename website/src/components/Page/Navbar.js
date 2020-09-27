import React from "react";
import "./Navbar.css";
import "../../base.css";
import blueprint_logo from "../../assets/blueprint_logo_only.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import { makeStyles } from "@material-ui/core/styles";

export default function BlueprintNavbar() {
  return (
    <div className='navbar'>
      <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark'>
        <Navbar.Brand href='#home'>
          <div className='homeLink navbar'>
            <Link style={{ textDecoration: "none" }} className='home' to='/'>
              <img src={blueprint_logo} alt='blueprint-logo' />
              <h1>blueprint</h1>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto' className='links'>
            <Nav.Link href='/about'>
              <p>About</p>
            </Nav.Link>
            <Nav.Link href='/projects'>
              <p>Projects</p>
            </Nav.Link>
            <Nav.Link href='/contact'>
              <p>Contact</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
