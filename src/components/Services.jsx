import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 data-aos="fade-up">Our Services</h2>
      <div className="services-grid">
        <div className="service-card" data-aos="fade-up">
          <h3>Lawn Maintenance</h3>
          <p>Regular mowing, trimming, and fertilization for a healthy green lawn.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Garden Design</h3>
          <p>Creative and functional designs to transform your outdoor space.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Tree Pruning</h3>
          <p>Professional pruning and trimming to maintain tree health and aesthetics.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Plantation Services</h3>
          <p>We provide planting of trees, shrubs, and seasonal flowers with care.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <h3>Garden Lighting</h3>
          <p>Install decorative lighting to enhance the charm of your garden at night.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="500">
          <h3>Vertical Gardening</h3>
          <p>Green wall solutions for space-saving and decorative gardening.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="600">
          <h3>Organic Composting</h3>
          <p>Eco-friendly compost setup and management for garden nutrition.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="700">
          <h3>Irrigation Setup</h3>
          <p>Drip and sprinkler irrigation systems tailored for your landscape.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="800">
          <h3>Terrace Gardening</h3>
          <p>Transform your rooftop into a green oasis with our expert setup.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="900">
          <h3>Seasonal Cleanup</h3>
          <p>Pre and post-season cleaning and maintenance services for your garden.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="1000">
          <h3>Stone & Pathway Design</h3>
          <p>Custom stone layouts and paths to beautify your landscape architecture.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="1100">
          <h3>Garden Pest Control</h3>
          <p>Organic and safe pest control methods for healthy plant growth.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
