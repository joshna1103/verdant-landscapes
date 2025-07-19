import React from "react";
import "../styles/Gallery.css"; // CSS styling for the gallery

const galleryImages = [
  "/images/gallery1.jpeg",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery6.jpeg",
  "/images/gallery7.jpeg",
  "/images/gallery8.jpeg",
  "/images/gallery9.jpeg",
  "/images/gallery10.jpeg",
  "/images/gallery11.jpeg",
  "/images/gallery12.jpeg",
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
