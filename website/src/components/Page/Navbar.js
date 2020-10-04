import React from "react";
import "./Navbar.css";
import "../../base.css";
import blueprint_logo from "../../assets/blueprint_logo_only.png";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

//import { makeStyles } from "@material-ui/core/styles";

export default function BlueprintNavbar() {
  return (
    <div >
      <Navbar className='blueprint-navbar' collapseOnSelect expand='lg'>
        <Navbar.Brand>
          <div className='homeLink '>
            <Link style={{ textDecoration: "none" }} className='home' to='/'>
              <img src={blueprint_logo} alt='blueprint-logo' />
              <h1>blueprint</h1>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto links'>

            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/projects">Projects</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
