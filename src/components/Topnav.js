import React, { useState } from "react";
import "../styles/components/Topnav.css";

function Topnav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`topnav ${isOpen ? "open" : ""}`}>
      <img src="/assets/logo.png" alt="Siphome Logo" className="logo" />
      <ul className={`nav-links ${isOpen ? "hidden" : ""}`}>
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
      <div className={`auth-links ${isOpen ? "hidden" : ""}`}>
        <a href="#sign-in" className="sign-in">
          Sign In
        </a>
        <a href="#get-started" className="get-started">
          Get Started
        </a>
      </div>
      <button
        className={`menu-button ${isOpen ? "close" : ""}`}
        onClick={toggleMenu}>
        {isOpen ? "Close" : "Menu"}
      </button>
      {isOpen && (
        <div className="menu-container">
          <div className="menu-header">
            <h1>Siphome Menu</h1>
            <button className="menu-button close" onClick={toggleMenu}>
              Close
            </button>
          </div>
          <div className="menu-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="menu-auth-links">
            <a href="#sign-in" className="sign-in">
              Sign In
            </a>
            <a href="#get-started" className="get-started">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Topnav;
