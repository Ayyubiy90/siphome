import React from "react";
import "../styles/components/Services.css";
import illustrationServices from "../assets/services-illustration.png";

const Service = () => {
  return (
    <section className="service">
      <div className="service-content">
        <h2 className="service-title">SERVICES</h2>
        <h3 className="service-subtitle">
          Bring more systems into the network
        </h3>
        <p className="service-description">
          Find out just how far Siphome can lead your home into next-gen
          intelligence.
        </p>
        <img
          src={illustrationServices}
          alt="Illustration of services"
          className="service-image"
        />
      </div>
    </section>
  );
};

export default Service;
