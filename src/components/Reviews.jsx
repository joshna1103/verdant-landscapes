// src/components/Reviews.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "Reviews"));
      const reviewsList = querySnapshot.docs.map((doc) => doc.data());
      setReviews(reviewsList);
    };

    fetchReviews();
  }, []);

  return (
    <section className="reviews-section" id="reviews">
      <h2>Client Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h4>{review.name}</h4>
            <p>{review.message}</p>
            <span>⭐ {review.rating}</span>
            <section className="review-section">
  <h2>Customer Reviews</h2>

  <form className="review-form" onSubmit={handleSubmit}>
    <input type="text" placeholder="Your Name" required />
    <textarea placeholder="Your Review" rows="4" required />
    <button type="submit">Submit Review</button>
  </form>

  <div className="review-list">
    <div className="review-card">
      <div className="star-rating">⭐⭐⭐⭐⭐</div>
      <h4>John Doe</h4>
      <p>Wonderful landscaping service! Very professional team.</p>
    </div>
  </div>
</section>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
