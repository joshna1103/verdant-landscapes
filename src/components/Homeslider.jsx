import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import CSS from styles folder
import "../styles/HomeSlider.css";

function HomeSlider() {
  return (
    <div className="home-slider">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* 🌿 Main Slides */}
        <SwiperSlide>
          <div className="slide">
            <img src="/images/home1.jpg" alt="Landscape 1" />
            <div className="overlay">
              <h1>Verdant Landscape and Gardening Services</h1>
              <p>Crafting Beautiful Gardens & Outdoor Spaces</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/home2.jpg" alt="Landscape 2" />
            <div className="overlay">
              <h1>Professional Gardening</h1>
              <p>Bringing Nature Closer to Your Home</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/home3.jpg" alt="Landscape 3" />
            <div className="overlay">
              <h1>Customized Landscaping</h1>
              <p>Designs Tailored to Your Lifestyle</p>
            </div>
          </div>
        </SwiperSlide>

        {/* 🌱 Extra Slides */}
        <SwiperSlide>
          <div className="slide">
            <img src="/images/lawn.jpg" alt="Lawn Production" />
            <div className="overlay">
              <h1>Lawn Production</h1>
              <p>Supplying and maintaining lush green lawns for every landscape.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/waterbody.jpg" alt="Water Bodies" />
            <div className="overlay">
              <h1>Water Bodies</h1>
              <p>Creating serene ponds and water features that enhance your garden.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/fountain.jpeg" alt="Fountain" />
            <div className="overlay">
              <h1>Fountain</h1>
              <p>Elegant water fountains to add beauty and calmness to your space.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/frp.jpeg" alt="FRP Plantation" />
            <div className="overlay">
              <h1>FRP Planters</h1>
              <p>Durable and elegant FRP planters to elevate your garden’s appeal.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlider;


