import React, { useEffect, useState } from "react";
import styles from "../Card/card.module.css";
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
    <div className={styles.container} onClick={(e) => cardClicked(e)}>
      {frontFacing ? (
        <img
          src={`./images/cards/face/${deckOfCard[randomIndex].image}`}
          alt='face'
          width={150}
          height={200}
          draggable
        />
      ) : (
        <img src={`./images/cards/back/red2.png`} alt='face' />
      )}
    </div>
  );
};
export default Card;
