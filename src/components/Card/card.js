import React, { useEffect, useState } from "react";

import deckOfCard from "../../utils/deckOfCards";

const Card = ({ isFront, setPlayerHand }) => {
  const [frontFacing] = useState(isFront);
  const randomIndex = Math.floor(Math.random() * deckOfCard.length);
  useEffect(() => {
    setPlayerHand([randomIndex]);
  }, []);

  const cardClicked = (e) => {
    console.log("clicked");
    const targ = e.target.src;
    console.log(targ);
  };
  return (
    <div>
      <div onClick={(e) => cardClicked(e)}>
        {frontFacing ? (
          <img
            src={`./images/cards/face/${deckOfCard[randomIndex].image}`}
            alt='face'
            draggable
          />
        ) : (
          <img src={`./images/cards/back/red2.png`} alt='face' />
        )}
      </div>
    </div>
  );
};
export default Card;
