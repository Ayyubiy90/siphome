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
        <p className="subtext">
          Turn your home into a smarthome today with a simple & <br />{" "}
          affordable upgrade. Discover the upgrade that automates <br /> home
          maintenance.
        </p>
      </div>
    </section>
  );
}

export default Hero;
