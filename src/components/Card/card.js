import React from "react";
import styles from "../Card/card.module.css";

const Card = ({ isOpponent, setKitty, kitty, card }) => {
  const cardClicked = (e) => {
    const id = e.target.id;
    setKitty([...kitty, Number(id)]);
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
