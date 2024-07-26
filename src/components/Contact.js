import React from "react";
import "../styles/components/Contact.css";
import contactIllustration from "../assets/contact-illustration.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">CONTACT</h2>
        <p className="contact-subtitle">
          Skip logging in, get what you need with a few key details
        </p>
        <img
          src={contactIllustration}
          alt="Contact Illustration"
          className="contact-illustration"
        />
      </div>
    </section>
  );
};

export default Contact;
