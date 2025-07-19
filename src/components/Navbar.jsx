import React from "react";
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo1.png" alt="Verdant Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
