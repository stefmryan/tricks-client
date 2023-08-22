import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = ({ name }) => {
  const [, setPlayerHand] = useState([]);
  const [isOpponent] = useState(name === "player");
  return (
    <div className={styles.container}>
      {name}

      <Card
        isFront={true}
        setPlayerHand={setPlayerHand}
        isOpponent={isOpponent}
      />
    </div>
  );
};
export default PlayerHand;
