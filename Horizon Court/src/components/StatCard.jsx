import React from "react";

const StatCard = (props) => {
  return (
    <div className="flex flex-col justify-center gap-3 sm:gap-4 p-4 sm:p-6 text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl">{props.number}</h1>
      <p className="text-sm sm:text-base md:text-medium opacity-60">
        {props.label}
      </p>
    </div>
  );
};

export default StatCard;
