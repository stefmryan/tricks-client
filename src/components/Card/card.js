import React from "react";
import styles from "../Card/card.module.css";

const Card = ({
  isOpponent,
  setKitty,
  card,
  hand,
  setPlayer1Hand,
  setDisplayRoundButton,
  opponent2Hand,
  setOpponent2Hand
}) => {
  const cardClicked = (e) => {
    console.log("Opponent 2 Hand")
    console.log(opponent2Hand);
    //adding card clicked to kitty
    const id = e.target.id;
    const suit = id[0];
    const face = id.slice(1);
    const cardForKitty = hand.filter((card) => {
      return card.suit === suit && card.face === face;
    });
    console.log(hand);
    setKitty(kitty => [...kitty, ...cardForKitty]);

    //remove card from hand
    const newHand = hand.filter(
      (card) => card.suit !== suit && card.face !== face
    );

    //trigger opponents to place card in kitty and update opponent
    //array so card in kitty is in kitty array and not in opponent array

    if (opponent2Hand.length > 1) {
      console.log("more than one card in opponent hand")

    } else {
      setOpponent2Hand([]);
      setKitty(kitty => [...kitty, ...opponent2Hand]);
    }

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
