import React from "react";
import SocialButton from "./SocialButtons.jsx";
import { socialLinks } from "../constants";

const HeroBottom = () => {
  return (
    <div className="h-auto sm:h-24 w-full text-zinc-100 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-0">
      <div className="left flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
        <p className="text-sm sm:text-base text-center sm:text-left">
          Train with real professional. <br /> and get real results
        </p>
        <div className="images relative h-12.5 w-40 p-2 rounded-full bg-linear-to-r flex justify-center items-center from-[#f5f5f5] to-[#ffffff25]">
          <img
            className="img w-12 sm:w-16 left-2 absolute rounded-[100%]"
            src="/person.webp"
            alt="Coach 1"
          />
          <img
            className="img w-12 sm:w-16 z-10 absolute rounded-[100%]"
            src="/person.webp"
            alt="Coach 2"
          />
          <img
            className="img w-12 sm:w-16 right-1.5 absolute rounded-[100%]"
            src="/person.webp"
            alt="Coach 3"
          />
        </div>
      </div>
      <div className="right text-sm sm:text-base flex flex-wrap gap-3 sm:gap-4 justify-center">
        {socialLinks.map((social) => (
          <SocialButton key={social.id} text={social.name} />
        ))}
      </div>
    </div>
  );
};

export default HeroBottom;
