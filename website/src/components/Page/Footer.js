import React from "react";
import "./Footer.css";
import blueprint_logo from "../../assets/blueprint_logo_only.png";
//import { makeStyles } from "@material-ui/core/styles";

export default function Footer() {
  return (
    <div class="footer">
        <div class="inner-footer">

            <div class="footer-logo">
                <img src={blueprint_logo} alt='blueprint-logo' />
                <h1>blueprint</h1>
            </div>
            
            <div class="footer-items">
                
            </div>
        
            <div class="footer-items">
                <h2>General</h2>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/projects"><li>Projects</li></a>
                    {/* <a href="/contact"><li>Contact</li></a> */}
                </ul>
            </div>
            
            <div class="footer-items">
                <h2>Social Media</h2>
                <ul>
                    <a href="http://facebook.com/uciblueprint"><li><i class="fa fa-facebook fa-lg" aria-hidden="true"></i>Facebook</li></a>
                    <a href="http://instagram.com/uciblueprint"><li><i class="fa fa-instagram fa-lg" aria-hidden="true"></i>Instagram</li></a>
                    <a href="http://github.com/uciblueprint"><li><i class="fa fa-github fa-lg" aria-hidden="true"></i>Github</li></a>
                    <a href="http://linkedin.com/company/uciblueprint/"><li><i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>LinkedIn</li></a>
                </ul>
            </div>
        
        </div>
        <div class="footer-bottom">
            © Blueprint 2020
        </div>
    </div>
  );
}
