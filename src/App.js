import React from "react";

import "./css/css-style.css";

import "./css/css-bootstrap.min.css";
import "./css/icofont-icofont.min.css";
import "./css/css-boxicons.min.css";
import "./css/assets-owl.carousel.min.css";
import "./css/venobox-venobox.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import StackSection from "./components/StackSection";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StackSection />
    </React.Fragment>
  );
}

export default App;
