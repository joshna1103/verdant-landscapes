// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Commercial Projects",
    "Farm Houses",
    "Industries",
    "Public Spaces",
    "Real Estate",
    "Resorts",
    "Residences",
    "Roof Garden",
    "Others",
  ];

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.mobile) newErrors.mobile = "Mobile is required.";
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const phoneNumber = "917013873612"; // ✅ Your WhatsApp number with country code
    const message = `Hello Verdant Landscaping Team,%0A
Name: ${formData.name}%0A
Mobile: ${formData.mobile}%0A
Email: ${formData.email}%0A
Service: ${formData.service}%0A
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank"); // ✅ Opens WhatsApp chat

    // Clear form after opening WhatsApp
    setFormData({ name: "", mobile: "", email: "", service: "", message: "" });
    setErrors({});
  };

  return (
    <section style={{ padding: "3rem", backgroundColor: "#f6fbf6" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1b4332" }}>
          Book an Appointment / Send Us a Message
        </h2>
        <p style={{ marginTop: "0.5rem", color: "#555" }}>
          Whether you want to schedule landscaping services, leave feedback, or
          ask a question — we’d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            textAlign: "left",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <input
            type="text"
            name="mobile"
            placeholder="Enter your Mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select a Service</option>
            {services.map((srv, idx) => (
              <option key={idx} value={srv}>
                {srv}
              </option>
            ))}
          </select>
          {errors.service && <p style={{ color: "red" }}>{errors.service}</p>}

          <div style={{ gridColumn: "1 / 3" }}>
            <textarea
              name="message"
              placeholder="Enter your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          </div>

          <div style={{ gridColumn: "1 / 3", textAlign: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#2d6a4f",
                color: "#fff",
                padding: "12px 30px",
                border: "none",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#1b4332")
              }
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2d6a4f")}
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
