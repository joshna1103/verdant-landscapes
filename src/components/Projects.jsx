import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';

const projectsImages = [
  { type: 'image', src: '/images/gallery1.jpeg' },
  { type: 'image', src: '/images/gallery2.jpeg' },
  { type: 'image', src: '/images/gallery3.jpeg' },
  { type: 'image', src: '/images/gallery4.jpeg' },
  { type: 'image', src: '/images/gallery6.jpeg' },
  { type: 'image', src: '/images/gallery8.jpeg' },
  { type: 'image', src: '/images/gallery9.jpeg' },
  { type: 'image', src: '/images/gallery11.jpeg' },
  { type: 'image', src: '/images/gallery12.jpeg' },
  { type: 'image', src: '/images/gallery13.jpg' },
  { type: 'image', src: '/images/gallery14.jpg' },
  { type: 'image', src: '/images/gallery15.jpg' },
  { type: 'image', src: '/images/gallery32.jpg' },
  { type: 'image', src: '/images/gallery18.jpg' },
  { type: 'image', src: '/images/gallery19.jpg' },
  { type: 'image', src: '/images/gallery20.jpg' },
  { type: 'image', src: '/images/gallery21.jpg' },
  { type: 'image', src: '/images/gallery22.jpg' },
  { type: 'image', src: '/images/gallery23.jpg' },
  { type: 'image', src: '/images/gallery24.jpg' },
  { type: 'image', src: '/images/gallery25.jpg' },
  { type: 'image', src: '/images/gallery26.jpg' },
  { type: 'image', src: '/images/gallery27.jpg' },
  { type: 'image', src: '/images/gallery28.jpg' },
  { type: 'image', src: '/images/gallery29.jpg' },
  { type: 'image', src: '/images/gallery30.jpg' },
  { type: 'image', src: '/images/gallery40.jpg' },
  { type: 'image', src: '/images/gallery31.jpg' },
 // { type: 'image', src: '/images/gallery33.jpg' },
  //{ type: 'video', src: '/videos/projects.mp4' },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2 data-aos="fade-up">Our Work</h2>
      <div className="projects-grid">
        {projectsImages.map((media, index) => (
          <div
            className="projects-item"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {media.type === 'image' ? (
              <img src={media.src} alt={`Project ${index + 1}`} />
            ) : (
              <video controls>
                <source src={media.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
