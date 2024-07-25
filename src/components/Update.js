import React from "react";
import "../styles/components/Update.css";
import backgroundUpdate from "../assets/background-update.png";
import updateImage from "../assets/update1.png";

function Update() {
  return (
    <section
      className="update"
      style={{ backgroundImage: `url(${backgroundUpdate})` }}>
      <div className="update-content">
        <h2 className="update-title">UPDATE</h2>
        <p className="update-subtitle">It starts with an upgrade</p>
        <div className="update-image-container">
          <img src={updateImage} alt="Update" className="update-image" />
        </div>
      </div>
    </section>
  );
}

export default Update;
