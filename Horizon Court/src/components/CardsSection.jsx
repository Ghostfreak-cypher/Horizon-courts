import React from "react";
import Card from "./Card.jsx";
import { cardsData } from "../constants";

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8 lg:p-10 my-6 sm:my-8 md:my-10">
      {cardsData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsSection;
