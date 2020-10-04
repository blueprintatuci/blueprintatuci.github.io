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
          <Link style={{ textDecoration: "none" }} className='home' to='/'>
            <img src={blueprint_logo} alt='blueprint-logo' />
            <h1>blueprint</h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto nav links'>

            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/projects">Projects</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar className="navbar" expand="lg">
                <Navbar.Brand >Kenny Ung</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav">

                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/coaching">Training</Link>

                        <Link to="/book"><span className='booking'>Book</span></Link>


                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
    </div>
  );
}
