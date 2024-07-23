import React from "react";
import "../styles/components/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Imagine your <br /> home smart enough <br />
          <span className="highlight">to take care</span> of itself.
        </h1>
        <p>
          Turn your home into a smart home today with a simple & <br />{" "}
          affordable upgrade. Discover the upgrade that automates <br /> home
          maintenance.
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
    </section>
  );
}

export default Hero;