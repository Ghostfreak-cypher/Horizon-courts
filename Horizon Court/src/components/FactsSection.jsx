import React from "react";
import StatCard from "./StatCard.jsx";
import { statsData } from "../constants";

const FactsSection = () => {
  return (
    <div className="facts-section w-full border-b-2 border-zinc-300 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center">
      <h1 className="text-lg sm:text-xl md:text-2xl capitalize text-center px-4">
        A few more facts about us in numbers
      </h1>
      <div className="container w-full">
        <div className="stats grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 my-6 sm:my-8 md:my-10">
          {statsData.map((stat) => (
            <StatCard key={stat.id} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
