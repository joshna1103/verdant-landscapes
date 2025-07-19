import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        message,
        timestamp: new Date(),
      });
      setSubmitted(true);
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  return (
    <section style={{ padding: "2rem", backgroundColor: "#eaf4ea" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 data-aos="fade-right">Leave a Review</h2>

        {submitted && (
          <p data-aos="zoom-in" style={{ color: "green" }}>
            Thank you for your feedback!
          </p>
        )}

        <form onSubmit={handleSubmit} data-aos="fade-up" style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#256029",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewForm;
