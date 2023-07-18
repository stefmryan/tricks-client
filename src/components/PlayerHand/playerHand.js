import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = (/*{ round }*/) => {
  //const [rounds] = useState(round);
  const [, setPlayerHand] = useState([]);
  return (
    <div className={styles.container}>
      <Card isFront={true} setPlayerHand={setPlayerHand} />
    </div>
  );
};
export default PlayerHand;
