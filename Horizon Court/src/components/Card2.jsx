import React from "react";

const Card2 = () => {
  return (
    <div className="h-80 sm:h-96 w-full rounded-4xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center items-center bg-[url(/hero.webp)] bg-center bg-cover">
      <div className="Sessions p-3 sm:p-4 bg-linear-to-r from-zinc-300 to-transparent rounded-4xl text-zinc-50">
        <h1 className="text-base sm:text-lg md:text-xl">
          Private & Group Lessons
        </h1>
      </div>
    </div>
  );
};

export default Card2;
