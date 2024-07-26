import React from "react";
import footerLogo from "../assets/footer-logo.png";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
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
    </footer>
  );
};

export default Footer;
