import React from "react";
import styles from "../Card/card.module.css";

const Card = ({
  isOpponent,
  setKitty,
  card,
  hand,
  setParticipantsArr,
  participantsArr,
  setDisplayRoundButton,

}) => {
  const cardClicked = (e) => {
    console.log("card clicked");
    const id = e.target.id;
    const suit = id[0];
    const face = id.slice(1);

    const opp1Card = participantsArr[1].hand.splice(Math.floor(Math.random() * participantsArr[1].hand.length), 1);
    const opp2Card = participantsArr[2].hand.splice(Math.floor(Math.random() * participantsArr[2].hand.length), 1);
    const opp3Card = participantsArr[3].hand.splice(Math.floor(Math.random() * participantsArr[3].hand.length), 1);

    const playerObj = { ...participantsArr[0] }
    const opp1Obj = { ...participantsArr[1] }
    const opp2Obj = { ...participantsArr[2] }
    const opp3Obj = { ...participantsArr[3] }


    //adding card clicked to kitty
    const playerCard = hand.filter((card) => {
      return card.suit === suit && card.face === face;
    });
    playerObj.cardPlayed = playerCard;

    const cardsForKitty = [...playerCard, ...opp1Card, ...opp2Card, ...opp3Card]
    setKitty(cardsForKitty);

    //remove card from hand and update array for player
    // key in participantsArr
    const newHand = [];

    hand.forEach((card) => {
      if (card.suit === suit && card.face !== face || card.suit !== suit) {
        newHand.push(card);
      }
    })

    playerObj.hand = newHand;
    const opp1Hand = [];

    participantsArr[1].hand.forEach((card) => {
      if (card.suit === opp1Card.suit && card.face !== opp1Card || card.suit !== opp1Card.suit) {
        opp1Hand.push(card);
      }
    })
    opp1Obj.hand = opp1Hand;
    opp1Obj.cardPlayed = opp1Card;

    const opp2Hand = []
    participantsArr[2].hand.forEach((card) => {
      if (card.suit === opp2Card.suit && card.face !== opp2Card.face || card.suit !== opp2Card.suit) {
        opp2Hand.push(card);
      }
    })
    opp2Obj.hand = opp2Hand;
    opp2Obj.cardPlayed = opp2Card;

    const opp3Hand = []

    participantsArr[3].hand.forEach((card) => {
      if (card.suit === opp3Card.suit && card.face !== opp3Card.face || card.suit !== opp3Card.suit) {
        opp3Hand.push(card);
      }
    })
    opp3Obj.hand = opp3Hand;
    opp3Obj.cardPlayed = opp3Card;
    setParticipantsArr([playerObj, opp1Obj, opp2Obj, opp3Obj]);

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
