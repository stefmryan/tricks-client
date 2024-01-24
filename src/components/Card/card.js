import React from "react";
import styles from "../Card/card.module.css";

const Card = ({
  isOpponent,
  setKitty,
  kitty,
  card,
  hand,
  setPlayer1Hand,
  setDisplayRoundButton,
}) => {
  const cardClicked = (e) => {
    //adding card clicked to kitty
    const id = e.target.id;
    const suit = id[0];
    const face = id.slice(1);
    const cardForKitty = hand.filter((card) => {
      return card.suit === suit && card.face === face;
    });
    console.log(hand);
    setKitty(...kitty, cardForKitty);

    //remove card from hand
    const newHand = hand.filter(
      (card) => card.suit !== suit && card.face !== face
    );

    setPlayer1Hand(newHand);

    //trigger button to appear if round is over.
    if (newHand.length === 0) {
      setDisplayRoundButton(true);
    }
  };
  return (
    <div className={styles.container}>
      {card !== undefined && (
        <img
          id={`${card.suit}${card.face}`}
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
