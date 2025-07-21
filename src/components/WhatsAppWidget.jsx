import React from "react";
import "../styles/WhatsAppWidget.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/917799499466" 
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppWidget;
