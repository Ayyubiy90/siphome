import React from "react";
import contactIllustration from "../assets/contact-illustration.png";
import "../styles/components/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-title">CONTACT</h2>
          <p className="contact-subtitle">
            Skip logging in, get what you need with a few key details
          </p>
          <img
            src={contactIllustration}
            alt="Contact Illustration"
            className="contact-image"
          />
        </div>

        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your name (required)</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email (required)</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject (required)</label>
              <input type="text" id="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category">
                <option value="jobdesk">Jobdesk</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company name</label>
              <input type="text" id="company" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4"></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
