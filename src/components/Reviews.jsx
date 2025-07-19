import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import AOS from "aos";
import "aos/dist/aos.css";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsData);
      AOS.refresh(); // Refresh animations after reviews are loaded
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    fetchReviews();
  }, []);

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f3f4f6" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 data-aos="zoom-in" style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          What Our Customers Say
        </h2>

        {reviews.length === 0 ? (
          <p data-aos="fade-in">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={review.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "20px",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                textAlign: "left",
              }}
            >
              <h4 style={{ marginBottom: "8px", color: "#256029" }}>{review.name}</h4>
              <p style={{ margin: 0, color: "#333" }}>{review.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AllReviews;
