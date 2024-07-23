import React, { useState } from "react";
import "../styles/components/Topnav.css";

function Topnav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`topnav ${menuOpen ? "open" : ""}`}>
      <img src="/assets/logo.png" alt="Siphome Logo" className="logo" />
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <div className={`auth-links ${menuOpen ? "open" : ""}`}>
        <a href="#sign-in" className="sign-in">
          Sign In
        </a>
        <a href="#get-started" className="get-started">
          Get Started
        </a>
      </div>
      {menuOpen && (
        <div className="menu-header">
          <h1>Siphome Menu</h1>
          <button className="menu-button close" onClick={toggleMenu}>
            Close
          </button>
        </div>
      )}
      {!menuOpen && (
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
      )}
    </nav>
  );
}

export default Topnav;
