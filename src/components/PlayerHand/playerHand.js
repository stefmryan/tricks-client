import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = ({
  name,
  setKitty,
  kitty,
  hand,
  setParticipantsObj,
  participantsObj,
  setDisplayRoundButton,
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
                kitty={kitty}
                card={card}
                hand={hand}
                setParticipantsObj={setParticipantsObj}
                participantsObj={participantsObj}
                setDisplayRoundButton={setDisplayRoundButton}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlayerHand;
