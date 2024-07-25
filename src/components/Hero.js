import React from "react";
import "../styles/components/Hero.css";
import heroImage from "../assets/image.png";
import dotsImage from "../assets/dots.png";
import illustrationImage from "../assets/illustration.png";
import iconThreat from "../assets/ico-threat.png";
import iconSmart from "../assets/ico-smart.png";
import iconPrevention from "../assets/ico-prevention.png";
import iconService from "../assets/ico-service.png";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Imagine your <br /> home smart enough <br />
            <span className="highlight">to take care</span> of itself.
          </h1>

          <p className="subtext">
            Turn your home into a smart home today with a simple & <br />
            affordable upgrade. Discover the upgrade that automates <br />
            home maintenance.
          </p>

          <div className="hero-buttons">
            <a href="#get-started" className="hero-button">
              Get Started
            </a>
            <a href="#learn-more" className="hero-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="features">
        <div className="features-content">
          <p className="features-text">
            Every day your home faces countless potential threats. Every day you
            face countless potential headaches. A small problem can become a
            major disaster. Early warning signs exist but often you can't hear
            or see them.
          </p>
          <img src={dotsImage} alt="Dots" className="dots-image" />

          <div className="features-details">
            <img
              src={illustrationImage}
              alt="Illustration"
              className="illustration-image"
            />

            <div className="features-heading-container">
              <h2 className="features-heading">FEATURES</h2>
              <p className="meet-siphome">Meet Siphome</p>
              <p className="meet-description">
                The most comprehensive smart solution to home maintenance. All
                it takes is a simple and affordable sensor installation by one
                of our Siphome certified technicians.
              </p>

              <div className="card">
                <div className="card-item">
                  <img
                    src={iconThreat}
                    alt="Automatic Threat Detection"
                    className="card-icon"
                  />
                  <h3 className="card-title">Automatic Threat Detection</h3>
                  <p className="card-description">
                    Siphome reacts the moment your equipment fails, alerting you
                    to the problem.
                  </p>
                </div>

                <div className="card-item">
                  <img
                    src={iconSmart}
                    alt="Smart Diagnostics"
                    className="card-icon"
                  />
                  <h3 className="card-title">Smart Diagnostics</h3>
                  <p className="card-description">
                    See exactly what is malfunctioning and compare your
                    maintenance options on the same screen.
                  </p>
                </div>

                <div className="card-item">
                  <img
                    src={iconPrevention}
                    alt="Disaster Prevention"
                    className="card-icon"
                  />
                  <h3 className="card-title">Disaster Prevention</h3>
                  <p className="card-description">
                    Predictive analytics lets you see what needs maintenance
                    before it fails.
                  </p>
                </div>

                <div className="card-item">
                  <img
                    src={iconService}
                    alt="24/7 Service"
                    className="card-icon"
                  />
                  <h3 className="card-title">24/7 Service</h3>
                  <p className="card-description">
                    Siphome monitors your critical systems 24/7 so you can enjoy
                    peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
