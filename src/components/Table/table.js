import React, { useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import styles from "../Table/table.module.css";

const Table = ({ playerObjs }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  return (
    <div className={styles.grid}>
      <div className={styles.grid_item1}>
        <PlayerHand round={1} name={players[1]} setKitty={setKitty} />
      </div>{" "}
      <div>
        <PlayerHand round={1} name={players[2]} setKitty={setKitty} />
      </div>
      <div id={styles.kitty}>{kitty}</div>
      <div>
        <PlayerHand round={1} name={players[3]} setKitty={setKitty} />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand round={1} name={players[0]} setKitty={setKitty} />
      </div>
    </div>
  );
};
export default Table;
