import React from "react";
import Statball from "./Statball.jsx";

const Card3 = () => {
  return (
    <div className="h-80 sm:h-96 w-full rounded-4xl p-6 sm:p-8 md:p-10 bg-zinc-300 text-zinc-800 flex flex-col">
      <div className="upper flex flex-col items-start gap-2 sm:gap-3 mb-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl">100+</h1>
        <h2 className="text-lg sm:text-xl capitalize">pro Coaches</h2>
        <p className="opacity-75 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          sint. Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="lower-stats mt-auto flex flex-col gap-2 items-start">
        <Statball text="beginner" balls={9} number={55} />
        <Statball text="intermediate" balls={5} number={55} />
        <Statball text="advanced" balls={3} number={55} />
      </div>
    </div>
  );
};

export default Card3;
