import React from "react";
import "../styles/WhyUs.css";

const WhyUs = () => {
  return (
    <section className="whyus-section" id="whyus">
      <div className="whyus-container">
        <h2 data-aos="fade-up">Why Choose Us</h2>
        <div className="whyus-grid">
          <div className="whyus-card" data-aos="fade-up">
            <h3>Experienced Team</h3>
            <p>Our professionals bring years of expertise in landscaping and gardening services.</p>
          </div>
          <div className="whyus-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Quality Work</h3>
            <p>We prioritize quality in every project with attention to detail and design.</p>
          </div>
          <div className="whyus-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Eco-Friendly Solutions</h3>
            <p>We follow sustainable and environmentally responsible practices in all our services.</p>
          </div>
          <div className="whyus-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Affordable Pricing</h3>
            <p>Premium landscaping solutions at budget-friendly and transparent rates.</p>
          </div>
          <div className="whyus-card" data-aos="fade-up" data-aos-delay="400">
            <h3>Timely Delivery</h3>
            <p>We value your time and ensure project completion within the agreed schedule.</p>
          </div>
          <div className="whyus-card" data-aos="fade-up" data-aos-delay="500">
            <h3>Customer Satisfaction</h3>
            <p>We focus on delighting our clients by delivering exceptional service every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
