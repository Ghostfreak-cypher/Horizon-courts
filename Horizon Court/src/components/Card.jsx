import React from "react";
import Statball from "./Statball.jsx";

const Card = ({ card }) => {
  // Feature Card Type (Card1 style)
  if (card.type === "feature") {
    return (
      <div
        className={`h-80 sm:h-96 w-full rounded-4xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between ${card.bgColor}`}
      >
        <div className="icon">{card.icon}</div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          {card.description}
        </p>
        {card.hasGameMode && (
          <div className="bottom flex items-center gap-3 sm:gap-4">
            <div className="on-off h-5 w-14 rounded-3xl flex items-center justify-end p-1 bg-blue-400">
              <div className="circle h-4 w-4 rounded-full flex items-center justify-center bg-white mt-0.5 ml-1">
                <div className="mini-circle h-2 w-2 rounded-full bg-blue-400"></div>
              </div>
            </div>
            <h4 className="text-sm sm:text-base">Game mode</h4>
          </div>
        )}
      </div>
    );
  }

  // Image Card Type (Card2 style)
  if (card.type === "image") {
    return (
      <div
        className={`h-80 sm:h-96 w-full rounded-4xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-center items-center ${card.bgImage} bg-center bg-cover`}
      >
        <div className="Sessions p-3 sm:p-4 bg-linear-to-r from-zinc-300 to-transparent rounded-4xl text-zinc-50">
          <h1 className="text-base sm:text-lg md:text-xl">{card.title}</h1>
        </div>
      </div>
    );
  }

  // Stats Card Type (Card3 style)
  if (card.type === "stats") {
    return (
      <div
        className={`h-80 sm:h-96 w-full rounded-4xl p-6 sm:p-8 md:p-10 ${card.bgColor} ${card.textColor} flex flex-col`}
      >
        <div className="upper flex flex-col items-start gap-2 sm:gap-3 mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">
            {card.mainNumber}
          </h1>
          <h2 className="text-lg sm:text-xl capitalize">{card.mainLabel}</h2>
          <p className="opacity-75 text-sm sm:text-base">{card.description}</p>
        </div>
        <div className="lower-stats mt-auto flex flex-col gap-2 items-start">
          {card.stats.map((stat, index) => (
            <Statball
              key={index}
              text={stat.text}
              balls={stat.balls}
              number={stat.number}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Card;
