import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import InfoBar from "./components/InfoBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews"; 
import ReviewForm from "./components/ReviewForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./styles/App.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <InfoBar />
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <ReviewForm />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
