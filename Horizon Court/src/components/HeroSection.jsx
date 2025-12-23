import React from "react";
import HeroCenter from "./HeroCenter";
import HeroBottom from "./HeroBottom";

const HeroSection = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="Container bg-[url(/hero.webp)] bg-cover bg-center h-[100vh] sm:h-[110vh] md:h-[120vh] w-full border-none rounded-4xl flex flex-col justify-between items-center overflow-hidden bg-gray-200">
        <div className="hero-content flex flex-col pt-20 sm:pt-28 md:pt-36 lg:pt-40 justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4">
          <HeroCenter />
        </div>
        <HeroBottom />
      </div>
    </div>
  );
};

export default HeroSection;
