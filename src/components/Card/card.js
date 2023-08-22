import React, { useEffect, useState } from "react";
import styles from "../Card/card.module.css";
import deckOfCard from "../../utils/deckOfCards";

const Card = ({ isFront, setPlayerHand, isOpponent, playerHand }) => {
  const [frontFacing] = useState(isFront);
  const [, SetClicked] = useState(false);
  const randomIndex = Math.floor(Math.random() * deckOfCard.length);
  useEffect(() => {
    setPlayerHand([...playerHand, randomIndex]);
  }, []);

  const cardClicked = (e) => {
    const id = e.target.id;
    console.log(id);
    console.log(playerHand);
    SetClicked(true);
  };
  return (
    <div className={styles.container}>
      {frontFacing ? (
        <img
          id={Number(playerHand)}
          src={`./images/cards/face/${deckOfCard[Number(playerHand)].image}`}
          alt='face'
          width={150}
          height={200}
          onClick={!isOpponent ? (e) => cardClicked(e) : null}
        />
      ) : (
        <img src={`./images/cards/back/red2.png`} alt='face' />
      )}
    </div>
  );
};
export default Card;
