import React from "react";
import linkedin from "./linkedin.png";
import facebook from "./facebook-new.png";
import twitter from "./twitter.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="footer-copyright">
                <p>COPYRIGHT © | ARTARA | 2022</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={linkedin} alt="linkedin" id="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={facebook} alt="facebook" id="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={twitter} alt="twitter" id="footer-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
