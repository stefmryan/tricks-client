import React, { useState } from "react";
import deckOfCard from "../utils/deckOfCards";

const Card = ({ isFront }) => {
  const [frontFacing] = useState(isFront);
  const randomIndex = Math.floor(Math.random() * deckOfCard.length);

  return (
    <div>
      {frontFacing ? (
        <img
          src={`./images/cards/face/${deckOfCard[randomIndex].image}`}
          alt='face'
        />
      ) : (
        <img src={`./images/cards/back/red2.png`} alt='face' />
      )}
    </div>
  );
};
export default Card;
