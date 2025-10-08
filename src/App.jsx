import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import InfoBar from "./components/InfoBar";
import HomeSlider from "./components/HomeSlider";
import Navbar from "./components/Navbar";
//import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Projects from "./components/Projects";
//import ReviewList from "./components/ReviewList";
import ContactForm from "./components/ContactForm";
//import Contact from "./components/Contact";
//import GoogleForm from "./components/GoogleForm";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
// import WhatsAppWidget from "./components/WhatsAppWidget";
// import ScrollToTop from "./components/ScrollToTop";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/App.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <InfoBar />
      <Navbar />
      <HomeSlider />
      {/*<Home />*/}
      <About />
      <Services />
      <WhyUs />
      <Projects />
      {/*<ReviewList /> */}
      <ContactForm />
      <Footer />
      <FloatingContact />
      {/* <WhatsAppWidget /> */}
      {/* <ScrollToTop /> */}
    </>
  );
};

export default App;
