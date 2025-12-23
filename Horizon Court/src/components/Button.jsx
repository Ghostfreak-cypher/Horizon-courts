import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#0D1A2E] hover:bg-[#132642] hover:scale-105 hover:shadow-xl text-white font-light tracking-wide py-3 px-8 rounded-full transition-all duration-300">
      {props.text ? props.text : "Get Started"}
    </button>
  );
};

export default Button;
