import React from "react";
import "../styles/Navbar.css"; // make sure your CSS file is linked

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.png" alt="Verdant Logo" className="logo" />
        <div className="brand-text">
          <h1>VERDANT</h1>
          <p>Landscaping and Gardening Services</p>
          <span className="tagline">Where beauty is rooted in nature</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
