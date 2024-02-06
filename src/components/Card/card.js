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
  kitty
  //opponent2Hand,
}) => {
  const cardClicked = (e) => {

    const id = e.target.id;
    const suit = id[0];
    const face = id.slice(1);

    const opp1Card = participantsObj.opponent1.splice(Math.floor(Math.random() * participantsObj.opponent1.length), 1);
    const opp2Card = participantsObj.opponent2.splice(Math.floor(Math.random() * participantsObj.opponent2.length), 1);
    const opp3Card = participantsObj.opponent3.splice(Math.floor(Math.random() * participantsObj.opponent3.length), 1);




    //adding card clicked to kitty
    const cardForKitty = hand.filter((card) => {
      return card.suit === suit && card.face === face;
    });

    const cardsForKitty = [...cardForKitty, ...opp1Card, ...opp2Card, ...opp3Card]
    kitty.concat(cardForKitty)
    kitty.concat(opp1Card)
    kitty.concat(opp2Card)
    kitty.concat(opp3Card)

    console.log(kitty)
    setKitty(cardsForKitty);

    //remove card from hand and update array for player
    // key in participantsObj
    const newHand = [];

    hand.forEach((card) => {
      if (card.suit === suit && card.face !== face || card.suit !== suit) {
        newHand.push(card);
      }
    })
    setParticipantsObj({ ...participantsObj, player: newHand, opponent2: [] });

    //trigger opponents to place card in kitty and update opponent
    //array so card in kitty is in kitty array and not in opponent array

    if (participantsObj.opponent2.length > 1) {
      console.log("more than one card in opponent hand")

    } else {
      //setParticipantsObj({ ...participantsObj, opponent2: [] })
      //setKitty(kitty => [...kitty, participantsObj.opponent2]);
    }



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
