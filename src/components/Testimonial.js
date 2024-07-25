import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import testimonialPhoto1 from "../assets/testimonial-photo-1.png";
import testimonialPhoto2 from "../assets/testimonial-photo-2.png";
import testimonialPhoto3 from "../assets/testimonial-photo-3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/components/Testimonial.css";

const testimonials = [
  {
    photo: testimonialPhoto1,
    message:
      "We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm.",
    name: "Ryan Oliver",
    role: "Design Manager at Kiluna",
  },
  {
    photo: testimonialPhoto2,
    message:
      "Thank you for introducing me to Siphome! We like how the system gives updates to us and the homeowner as well to give us a real time update on how everything is working.",
    name: "Gladina Samantha",
    role: "CEO Jobdesk United, LLC",
  },
  {
    photo: testimonialPhoto3,
    message:
      "Thank you for introducing me to Siphome! We like how the system gives updates to us and the homeowner as well to give us a real time update on how everything is working.",
    name: "Gladina Samantha",
    role: "CEO Jobdesk United, LLC",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <h2 className="testimonial-title">TESTIMONIALS</h2>
      <p className="testimonial-subtitle">
        Let’s see what people say about Siphome
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="testimonial-swiper">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <img
                src={testimonial.photo}
                alt={`Testimonial from ${testimonial.name}`}
                className="testimonial-photo"
              />
              <p className="testimonial-message">{testimonial.message}</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
