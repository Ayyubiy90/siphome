import React, { useState, useEffect } from "react";
import "../styles/components/Topnav.css";
import logo from "../assets/logo.png";

function Topnav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav className={`topnav ${isOpen ? "open" : ""}`}>
      <img src={logo} alt="Siphome Logo" className="logo" />
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
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <h1>Siphome Menu</h1>
          
        </div>
        <div className="menu-links">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#features" onClick={toggleMenu}>
            Features
          </a>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
          <a href="#faq" onClick={toggleMenu}>
            FAQ
          </a>
        </div>
        <div className="menu-auth-links">
          <a href="#sign-in" className="sign-in" onClick={toggleMenu}>
            Sign In
          </a>
          <a href="#get-started" className="get-started" onClick={toggleMenu}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Topnav;
