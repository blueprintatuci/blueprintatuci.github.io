import React from "react";
import "./Navbar.css";
import "../index.css";
import blueprint_logo from "../assets/blueprint_logo.png";

//import { makeStyles } from "@material-ui/core/styles";

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={blueprint_logo} alt='blueprint-logo' />
    </div>
  );
}
