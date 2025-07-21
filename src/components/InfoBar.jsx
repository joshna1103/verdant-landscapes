import React, { useEffect } from "react";
import "../styles/InfoBar.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoBar = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="info-bar" data-aos="fade-down">
      <div className="info-item">
        <FaPhoneAlt /> <span>+91 7799499466</span>
      </div>
      <div className="info-item">
        <FaEnvelope /> <span>verdant.projectdesk@gmail.com</span>
      </div>
      <div className="info-item">
        <FaMapMarkerAlt /> <span>Hyderabad, Telangana</span>
      </div>
      <div className="info-item">
        <a
          href="https://www.instagram.com/verdant_landscapes_gardening/" // 🔁 replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="insta-link"
        >
          <FaInstagram /> <span>Follow us</span>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
