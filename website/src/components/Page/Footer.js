import React from "react";
import "./Footer.css";
import blueprint_logo from "../../assets/blueprint_logo.png";
import facebook_logo from "../../assets/facebook.png";
import instagram_logo from "../../assets/instagram.png";
import github_logo from "../../assets/github.png";
import linkedin_logo from "../../assets/linkedin.png";
//import { makeStyles } from "@material-ui/core/styles";

export default function Footer() {
  return (
    <div className='footer'>
      <div class='container'>
        <div class='row'>
          <div class='column left'>
            <a href='http://google.com'>
              <img src={blueprint_logo} alt='blueprint-logo' />
            </a>
          </div>
          <div class='column middle'>
            <div class='headings'>General</div>
            <ul>
              <li>
                <a class='link' href='/'>
                  Home
                </a>
              </li>
              <li>
                <a class='link' href='/about'>
                  About
                </a>
              </li>
              <li>
                <a class='link' href='/project'>
                  Projects
                </a>
              </li>
              <li>
                <a class='link' href='http://google.com'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class='column right'>
            <div class='headings'>Social Media</div>
            <div class='inner-column inner-column-left'>
              <ul class='logo-column'>
                <li class='logo-column-margin-bot'>
                  <div class='logo'>
                    <a href='http://facebook.com/uciblueprint'>
                      <img src={facebook_logo} alt='facebook-logo' />
                    </a>
                  </div>
                </li>
                <li class='logo-column-margin-bot'>
                  <div class='logo'>
                    <a href='http://instagram.com'>
                      <img src={instagram_logo} alt='instagram-logo' />
                    </a>
                  </div>
                </li>
                <li class='logo-column-margin-bot'>
                  <div class='logo'>
                    <a href='http://github.com/uciblueprint'>
                      <img src={github_logo} alt='github-logo' />
                    </a>
                  </div>
                </li>
                <li class='logo-column-margin-bot'>
                  <div class='logo'>
                    <a href='http://facebook.com/uciblueprint'>
                      <img src={linkedin_logo} alt='linkedin-logo' />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class='inner-column inner-column-right'>
              <ul>
                <li>
                  <a class='link' href='http://facebook.com/uciblueprint'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a class='link' href='http://instagram.com/uciblueprint'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a class='link' href='http://github.com/uciblueprint'>
                    Github
                  </a>
                </li>
                <li>
                  <a class='link' href='http://google.com'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class='copyright'>
        <p>© Blueprint 2020</p>
      </div>
    </div>
  );
}
