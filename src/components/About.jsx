import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <h2>About Us</h2>
          <p>
            At <strong>Verdant</strong>,  we believe that every outdoor space has the potential to blossom into something extraordinary. With a deep-rooted passion for nature and years of expertise in landscape design, gardening, and maintenance, we transform ordinary spaces into thriving green havens.

From carefully curated gardens to expansive landscapes, our services reflect our commitment to quality, creativity, and sustainability. We blend aesthetics with functionality, ensuring that your outdoors are not just beautiful—but also alive, welcoming, and easy to maintain.
          </p>
          <p>
            Our mission is simple: to nurture nature while delivering dependable, professional, and personalized services. Whether it’s a home garden, commercial space, or a large estate, Verdant brings your outdoor dreams to life—leaf by leaf, stone by stone.
          </p>
        </div>
        <div className="about-image" data-aos="fade-left">
          <img src="/images/about.jpg" alt="About Verdant Landscaping" />
        </div>
      </div>
    </section>
  );
};

export default About;
