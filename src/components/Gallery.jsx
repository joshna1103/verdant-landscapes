import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Gallery.css';

const galleryImages = [
  '/images/gallery1.jpeg',
  '/images/gallery2.jpeg',
  '/images/gallery3.jpeg',
  '/images/gallery6.jpeg',
  '/images/gallery8.jpeg',
  //'/images/gallery9.jpeg',
  //'/images/gallery10.jpeg',
  '/images/gallery11.jpeg',
  '/images/gallery12.jpeg',
  '/images/gallery13.jpg',
  '/images/gallery14.jpg',
  '/images/gallery15.jpg',
  '/images/gallery16.jpg',
  //'/images/gallery17.jpg',
   '/images/gallery18.jpg',
  '/images/gallery19.jpg',
  //'/images/gallery16.jpg',
  //'/images/gallery17.jpg',
  '/images/gallery20.jpg',
  '/images/gallery21.jpg',
  '/images/gallery22.jpg',
  '/images/gallery23.jpg',
  // '/images/gallery24.jpg',
  //'/images/gallery25.jpg',
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <h2 data-aos="fade-up">Our Work</h2>
      <div className="gallery-grid">
        {galleryImages.map((imgSrc, index) => (
          <div
            className="gallery-item"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={imgSrc} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
