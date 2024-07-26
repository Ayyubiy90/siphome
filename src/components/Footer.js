import React from "react";
import "./Footer.css";
import footerLogo from "./assets/footer-logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
        <p className="footer-text">
          <strong>Siphome, LLC</strong>
          <br />
          The New Building 2320
          <br />
          Lang Avenue, Park Valley, Utah,
          <br />
          United States.
          <br />
          84329
          <br />
          <br />
          <strong>P:</strong> +1 176 909 2900
          <br />
          <strong>E:</strong> siphome@gmail.com
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h3 className="footer-heading">Navigation</h3>
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#features" className="footer-link">
            Features
          </a>
          <a href="#services" className="footer-link">
            Services
          </a>
          <a href="#testimonials" className="footer-link">
            Testimonials
          </a>
          <a href="#we-care" className="footer-link">
            We Care
          </a>
          <a href="#idea-exchange" className="footer-link">
            Idea Exchange
          </a>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">About</h3>
          <a href="#contact-us" className="footer-link">
            Contact Us
          </a>
          <a href="#privacy-policy" className="footer-link">
            Privacy & Policy
          </a>
          <a href="#terms-conditions" className="footer-link">
            Terms & Conditions
          </a>
          <a href="#faq" className="footer-link">
            FAQ
          </a>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Stay Connected</h3>
          <a href="#facebook" className="footer-link">
            <FaFacebook className="footer-icon" /> Facebook
          </a>
          <a href="#twitter" className="footer-link">
            <FaTwitter className="footer-icon" /> X
          </a>
          <a href="#instagram" className="footer-link">
            <FaInstagram className="footer-icon" /> Instagram
          </a>
          <a href="#email" className="footer-link">
            <FaEnvelope className="footer-icon" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
