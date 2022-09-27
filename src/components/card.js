import React from "react";
import deckOfCard from "../utils/deckOfCards";

const Card = () => {
  const randomIndex = Math.floor(Math.random() * deckOfCard.length);

  return (
    <div>
      <img
        src={`./images/cards/face/${deckOfCard[randomIndex].image}`}
        alt='face'
      />
    </div>
  );
};
export default Card;
