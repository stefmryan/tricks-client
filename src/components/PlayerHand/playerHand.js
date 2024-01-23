import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = ({ name, setKitty, kitty, hand }) => {
  const [isOpponent] = useState(name !== "player");

  return (
    <div className={styles.container}>
      {name}
      <Card
        isOpponent={isOpponent}
        setKitty={setKitty}
        kitty={kitty}
        hand={hand}
      />
    </div>
  );
};
export default PlayerHand;
