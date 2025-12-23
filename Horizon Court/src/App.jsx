import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CardsSection from "./components/CardsSection.jsx";
import FactsSection from "./components/FactsSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
const App = () => {
  return (
    <div className="homepage h-full w-full bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CardsSection />
      <FactsSection />
      <FooterSection />
    </div>
  );
};

export default App;
