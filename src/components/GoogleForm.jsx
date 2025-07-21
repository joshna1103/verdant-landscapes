// src/components/GoogleForm.jsx
import React from "react";
import "../styles/GoogleForm.css"; // Make sure this file exists

const GoogleForm = () => {
  return (
    <div className="google-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdZtvnN4hvP2EOIS4Np7z0QFj0RiujJqTabImDIDVh-ECtsXQ/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
