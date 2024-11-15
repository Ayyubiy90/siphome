import React, { useState, useEffect } from "react";
import illustrationServices from "../assets/services-illustration.png";
import iconMobileCommandManagement from "../assets/icon-mobile-command-management.png";
import iconEquipmentOptimizer from "../assets/icon-equipment-optimizer.png";
import iconLifecyclePrediction from "../assets/icon-lifecycle-prediction.png";
import iconEnergyOptimizer from "../assets/icon-energy-optimizer.png";
import iconTroubleshootingGuide from "../assets/icon-troubleshooting-guide.png";
import iconSmartDiagnostics from "../assets/icon-smart-diagnostics.png";
import iconVitalEquipmentScan from "../assets/icon-vital-equipment-scan.png";
import iconSmartAlerts from "../assets/icon-smart-alerts.png";
import iconPreventativeMaintenance from "../assets/icon-preventative-maintenance.png";

import "../styles/components/Services.css";
import "/node_modules/swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    { icon: iconMobileCommandManagement, text: "Mobile Command Management" },
    { icon: iconEquipmentOptimizer, text: "Equipment Optimizer" },
    { icon: iconLifecyclePrediction, text: "Lifestyle Prediction" },
    { icon: iconTroubleshootingGuide, text: "Troubleshooting Guide" },
    { icon: iconEnergyOptimizer, text: "Energy Optimizer" },
    { icon: iconSmartDiagnostics, text: "Smart Diagnostics" },
    { icon: iconVitalEquipmentScan, text: "Vital Equipment Scan" },
    { icon: iconSmartAlerts, text: "Smart Alerts" },
    { icon: iconPreventativeMaintenance, text: "Preventative Maintenance" },
  ];

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

        {!isMobile && (
          <div className="service-icons-container">
            {services.map((service, index) => (
              <div className="service-icon-box" key={index}>
                <img src={service.icon} alt="Icon" className="service-icon" />
                <p className="service-icon-text">{service.text}</p>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <>
            <Swiper
              spaceBetween={10}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{
                clickable: true,
                el: ".swiper-custom-pagination",
              }}
              modules={[Autoplay, Pagination]}
              className="service-swiper">
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-icon-box">
                    <img
                      src={service.icon}
                      alt="Icon"
                      className="service-icon"
                    />
                    <p className="service-icon-text">{service.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-custom-pagination"></div>
          </>
        )}
      </div>
    </section>
  );
};

export default Service;
