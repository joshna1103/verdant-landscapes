import React from "react";
import "../styles/WhatsAppWidget.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/919876543210" // Replace with your number
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppWidget;
