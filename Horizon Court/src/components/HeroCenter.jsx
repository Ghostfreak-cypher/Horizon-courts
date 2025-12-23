import React from "react";
import Button from "./button";

const HeroCenter = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 w-full">
      <h1 className="text-white font-medium mix-blend-plus-darker text-3xl sm:text-4xl md:text-5xl lg:text-6xl items-center flex text-center px-4">
        Unleash Your Inner Champion Today. <br className="hidden sm:block" />{" "}
        All In One Place.
      </h1>
      <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl justify-center items-center text-center px-4 sm:px-6 md:p-5">
        Join the ultimate tennis experience - where passion meets performance,
        and every swing brings you closer to victory.
      </h3>
      <Button text="Start your own Journey" />
    </div>
  );
};

export default HeroCenter;
