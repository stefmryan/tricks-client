import React, { useState } from "react";
import Card from "../Card/card";
import styles from "../PlayerHand/playerHand.module.css";

const PlayerHand = (/*{ round }*/ { name }) => {
  //const [rounds] = useState(round);
  const [, setPlayerHand] = useState([]);
  return (
    <div>
      {name}
      <div className={styles.container}>
        <Card isFront={true} setPlayerHand={setPlayerHand} />
      </div>
    </div>
  );
};
export default PlayerHand;
