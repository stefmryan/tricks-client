import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = (/*{ round }*/ { name }) => {
  //const [rounds] = useState(round);
  const [, setPlayerHand] = useState([]);
  return (
    <div className={styles.container}>
      {name}

      <Card isFront={true} setPlayerHand={setPlayerHand} />
    </div>
  );
};
export default PlayerHand;