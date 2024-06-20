import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <h4>Discover</h4>
          <ul>
            <li>
              <a href="#">Explore Creatives</a>
            </li>
            <li>
              <a href="#">Explore Projects</a>
            </li>
            <li>
              <a href="#">Behance Reviews</a>
            </li>
            <li>
              <a href="#">Creative Resources</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For Professionals</h4>
          <ul>
            <li>
              <a href="#">Post a Job</a>
            </li>
            <li>
              <a href="#">Find a Creative</a>
            </li>
            <li>
              <a href="#">For Enterprise</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Learn</h4>
          <ul>
            <li>
              <a href="#">Get Inspired</a>
            </li>
            <li>
              <a href="#">Learn &amp; Support</a>
            </li>
            <li>
              <a href="#">Careers at Behance</a>
            </li>
            <li>
              <a href="#">About Behance</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">AdChoices</a>
            </li>
            <li>
              <a href="#">Copyright Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Behance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
