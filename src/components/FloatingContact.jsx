import React from "react";
import "../styles/FloatingContact.css";
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingContact = () => {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floating-contact">
      <a href="tel:+917799499466" className="call-now" target="_blank" rel="noopener noreferrer">
        <FaPhoneAlt className="icon" />
        Call Now
      </a>

      <a
        href="https://wa.me/917799499466"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="icon" />
        WhatsApp
      </a>

      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default FloatingContact;
