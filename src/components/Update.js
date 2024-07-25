import React from "react";
import "../styles/components/Update.css";
import backgroundUpdate from "../assets/background-update.png";
import updateImage from "../assets/update1.png";
import monitorIcon from "../assets/icon-monitor.png";
import maintenanceIcon from "../assets/icon-maintenance.png";
import repairIcon from "../assets/icon-repair.png";
import replaceIcon from "../assets/icon-replace.png";

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

      <div className="update-details">
        <div className="detail-item">
          <img src={monitorIcon} alt="Monitor" className="detail-icon" />
          <div className="detail-text">
            <h3 className="detail-title">Monitor</h3>
            <p className="detail-description">
              Make your standard systems smart with Siphome. A simple
              installation or integration and we can start to monitor 24/7 to
              make sure your home is Siphome.
            </p>
          </div>
        </div>

        <div className="detail-item">
          <img
            src={maintenanceIcon}
            alt="Maintenance"
            className="detail-icon"
          />
          <div className="detail-text">
            <h3 className="detail-title">Maintenance</h3>
            <p className="detail-description">
              Siphome helps you maintain your home. The HomeHealth Record
              ensures you have the right information at the right time, and if
              you aren’t able to do the maintenance yourself, we can connect you
              to a service pro to help.
            </p>
          </div>
        </div>

        <div className="detail-item">
          <img src={repairIcon} alt="Repair" className="detail-icon" />
          <div className="detail-text">
            <h3 className="detail-title">Repair</h3>
            <p className="detail-description">
              Siphome empowers you with smart notifications so you can make
              repairs before they become problems. Notifications provide
              diagnostics and recommended next actions so you know what to do
              and have the same information as your service pro.
            </p>
          </div>
        </div>

        <div className="detail-item">
          <img src={replaceIcon} alt="Replace" className="detail-icon" />
          <div className="detail-text">
            <h3 className="detail-title">Replace</h3>
            <p className="detail-description">
              Improve your home over time. Build your next-gen smart home with
              Siphome’s advice along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Update;
