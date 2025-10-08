// src/components/ReviewForm.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../Firebase"; // storage added
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      let fileURL = "";

      // 🔹 If user uploaded a file, save it in Firebase Storage
      if (file) {
        const fileRef = ref(storage, `reviews/${Date.now()}_${file.name}`);
        await uploadBytes(fileRef, file);
        fileURL = await getDownloadURL(fileRef);
      }

      // 🔹 Save review + optional file URL in Firestore
      await addDoc(collection(db, "reviews"), {
        name,
        message,
        fileURL,
        timestamp: new Date(),
      });

      setSubmitted(true);
      setName("");
      setMessage("");
      setFile(null);
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

          {/* 🔹 New File Upload Field */}
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
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
