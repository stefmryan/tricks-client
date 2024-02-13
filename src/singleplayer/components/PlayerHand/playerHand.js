import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = ({
  name,
  setKitty,
  hand,
  setParticipantsArr,
  participantsArr,
  setDisplayRoundButton,

  setCardsInKitty

}) => {
  const [isOpponent] = useState(name !== "player");

  return (
    <div className={styles.container}>
      {name}
      <div className={styles.card}>
        {hand.map((card, index) => {
          return (
            <div key={index}>
              <Card
                isOpponent={isOpponent}
                setKitty={setKitty}
                card={card}
                hand={hand}
                setParticipantsArr={setParticipantsArr}
                participantsArr={participantsArr}
                setDisplayRoundButton={setDisplayRoundButton}
                setCardsInKitty={setCardsInKitty}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlayerHand;
