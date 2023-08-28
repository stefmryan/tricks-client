import React, { useEffect, useState } from "react";
import styles from "../Card/card.module.css";
import deckOfCard from "../../utils/deckOfCards";

const Card = ({ setPlayerHand, isOpponent, playerHand, setKitty, kitty }) => {
  const [visible, setVisible] = useState(true);
  const randomIndex = Math.floor(Math.random() * deckOfCard.length);
  useEffect(() => {
    setPlayerHand([...playerHand, randomIndex]);
  }, []);

  const cardClicked = (e) => {
    const id = e.target.id;
    setKitty([...kitty, Number(id)]);
    setVisible((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      {visible && (
        <img
          id={Number(playerHand)}
          src={`./images/cards/face/${deckOfCard[Number(playerHand)].image}`}
          alt='face'
          width={150}
          height={200}
          onClick={!isOpponent ? (e) => cardClicked(e) : null}
        />
      )}
    </div>
  );
};
export default Card;
