import React from "react";
import styles from "../Card/card.module.css";

const Card = ({
  isOpponent,
  setKitty,
  card,
  hand,
  setParticipantsObj,
  participantsObj,
  setDisplayRoundButton,

}) => {
  const cardClicked = (e) => {

    const id = e.target.id;
    const suit = id[0];
    const face = id.slice(1);

    const opp1Card = participantsObj.opponent1.hand.splice(Math.floor(Math.random() * participantsObj.opponent1.length), 1);
    const opp2Card = participantsObj.opponent2.hand.splice(Math.floor(Math.random() * participantsObj.opponent2.length), 1);
    const opp3Card = participantsObj.opponent3.hand.splice(Math.floor(Math.random() * participantsObj.opponent3.length), 1);




    //adding card clicked to kitty
    const playerCard = hand.filter((card) => {
      return card.suit === suit && card.face === face;
    });

    const cardsForKitty = [...playerCard, ...opp1Card, ...opp2Card, ...opp3Card]
    setKitty(cardsForKitty);

    //remove card from hand and update array for player
    // key in participantsObj
    const newHand = [];

    hand.forEach((card) => {
      if (card.suit === suit && card.face !== face || card.suit !== suit) {
        newHand.push(card);
      }
    })

    const opp1Hand = [];

    participantsObj.opponent1.hand.forEach((card) => {
      if (card.suit === opp1Card.suit && card.face !== opp1Card || card.suit !== opp1Card.suit) {
        opp1Hand.push(card);
      }
    })

    const opp2Hand = []
    participantsObj.opponent2.hand.forEach((card) => {
      if (card.suit === opp2Card.suit && card.face !== opp2Card.face || card.suit !== opp2Card.suit) {
        opp2Hand.push(card);
      }
    })

    const opp3Hand = []

    participantsObj.opponent3.hand.forEach((card) => {
      if (card.suit === opp3Card.suit && card.face !== opp3Card.face || card.suit !== opp3Card.suit) {
        opp3Hand.push(card);
      }
    })
    setParticipantsObj({ ...participantsObj, player: { hand: newHand, cardPlayed: playerCard }, opponent1: { hand: opp1Hand, cardPlayed: opp1Card }, opponent2: { hand: opp2Hand, cardPlayed: opp2Card }, opponent3: { hand: opp3Hand, cardPlayed: opp3Card } });
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
