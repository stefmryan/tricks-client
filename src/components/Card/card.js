import React, { useState } from "react";
import styles from "../Card/card.module.css";
//import deckOfCard from "../../utils/deckOfCards";

const Card = ({ isOpponent, setKitty, kitty, card }) => {
  const [, setVisible] = useState(true);

  const cardClicked = (e) => {
    const id = e.target.id;
    setKitty([...kitty, Number(id)]);
    setVisible((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      {card !== undefined && (
        <img
          src={`./images/cards/face/${card.image}`}
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
