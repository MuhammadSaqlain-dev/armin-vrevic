import React from "react";

import "./css/css-style.css";

import "./css/css-bootstrap.min.css";
import "./css/icofont-icofont.min.css";
import "./css/css-boxicons.min.css";
import "./css/venobox-venobox.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import StackSection from "./components/StackSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <main id="main">
        <AboutSection />
        <ServicesSection />
        <StackSection />
        <TestimonialSection />
        <PortfolioSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
