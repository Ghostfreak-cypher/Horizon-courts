import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const SocialButtons = (props) => {
  return (
    <div>
      <button className="flex gap-1 underline justify-center items-center hover:text-zinc-300 hover:scale-110 transition-all duration-300 group">
        {props.text || "Book Now"}{" "}
        <FaArrowUpLong className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default SocialButtons;
