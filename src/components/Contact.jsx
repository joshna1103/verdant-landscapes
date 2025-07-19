import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        {/* Left Column: Form */}
        <div className="contact-left">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Column: Info + Map */}
        <div className="contact-right">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +91 7799499466</p>
            <p><strong>Email:</strong> verdant.projectdesk@gmail.com</p>
            <p><strong>Address:</strong> Sainikpuri, Hyderabad, Telangana</p>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Verdant Landscaping Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.356539284976!2d78.54609337503012!3d17.441338302453477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bc7d938defd%3A0x74148e37fd5a5ff3!2sSainikpuri%2C%20Secunderabad%2C%20Telangana%20500094!5e0!3m2!1sen!2sin!4v1721382105249!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
