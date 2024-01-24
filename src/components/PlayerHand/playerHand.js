import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = ({ name, setKitty, kitty, hand }) => {
  const [isOpponent] = useState(name !== "player");

  return (
    <div className={styles.container}>
      {name}
      {hand.map((card, index) => {
        return (
          <div key={index}>
            <Card
              isOpponent={isOpponent}
              setKitty={setKitty}
              kitty={kitty}
              card={card}
            />
          </div>
        );
      })}
    </div>
  );
};
export default PlayerHand;
