import React from "react";
import "./Navbar.css";
import logo from "./1113-ai.png";
import sign from "./signin.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-bar-item">
          <div className="logo-div">
            <a href="/">
              <img src={logo} alt="logo" id="logo" />
            </a>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="/">gallery</a>
              </li>
              <li>
                <a href="/Artists">Artists</a>
              </li>
              <li>
                <a href="/Exhibitions">Exhibitions</a>
              </li>
            </ul>
          </div>
          <div className="signup">
            <a href="/Signup">
              <img src={sign} alt="Signup" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
