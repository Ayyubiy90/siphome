import React from "react";
import "../styles/components/Topnav.css";

function Topnav() {
  return (
    <nav className="topnav">
      <img src="/assets/logo.png" alt="Siphome Logo" className="logo" />
      <ul className="nav-links">
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
      <div className="auth-links">
        <a href="#sign-in" className="sign-in">
          Sign In
        </a>
        <a href="#get-started" className="get-started">
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Topnav;
