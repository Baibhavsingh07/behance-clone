import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="nav-left">
        <div className="logo">Behance</div>
        <nav>
          <a href="#">Explore</a>
          <a href="#">Assets</a>
          <a href="#">Jobs</a>
          <a href="#">Behance Pro</a>
          <a href="#">Hire Freelancers</a>
        </nav>
      </div>
      <div className="nav-right">
        <button className="bell">🔔</button>
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
        <div className="adobe-logo">Adobe</div>
      </div>
    </header>
  );
};

export default Header;
