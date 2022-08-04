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
            <Link to="/">
              <img src={logo} alt="logo" id="logo" />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/">gallery</Link>
              </li>
              <li>
                <Link to="/Artists">Artists</Link>
              </li>
              <li>
                <Link to="/Exhibitions">Exhibitions</Link>
              </li>
            </ul>
          </div>
          <div className="signup">
            <Link to="/Signup">
              <img src={sign} alt="Signup" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
