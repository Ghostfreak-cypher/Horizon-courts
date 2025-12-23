import React from "react";


const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
      <div className="left w-full md:w-auto">
        <button className="bg-[#ffffff] border-2 hover:bg-[#bec2c5] text-zinc-800 font-light tracking-wide py-3 px-6 sm:px-8 rounded-full transition-colors duration-200">
          About Horizon
        </button>
      </div>
      <div className="right w-full md:w-2/4 text-base sm:text-lg md:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint
        veritatis deserunt voluptas iusto debitis tempora assumenda modi a
        ipsum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        sint
      </div>
    </div>
  );
};

export default AboutSection;
