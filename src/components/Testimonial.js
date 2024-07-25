import React from "react";
import "../styles/components/Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <h2 className="testimonial-heading">TESTIMONIALS</h2>
        <p className="testimonial-subheading">
          What our customers say about us
        </p>
        
        <div className="testimonial-cards">
          {/* Example Testimonial Card */}
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Siphome has completely transformed the way I manage my home. It's
              smart, intuitive, and incredibly reliable."
            </p>
            <p className="testimonial-author">- John Doe</p>
          </div>
          {/* Add more testimonial cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
