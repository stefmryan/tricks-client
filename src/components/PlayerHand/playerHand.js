import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = ({ name, setKitty, kitty, hand, player1Hand }) => {
  const [playerHand, setPlayerHand] = useState([]);
  const [isOpponent] = useState(name !== "player");
  return (
    <div className={styles.container}>
      {name}
      <Card
        setPlayerHand={setPlayerHand}
        playerHand={playerHand}
        isOpponent={isOpponent}
        setKitty={setKitty}
        kitty={kitty}
        hand={hand}
        player1Hand={player1Hand}
      />
    </div>
  );
};
export default PlayerHand;
