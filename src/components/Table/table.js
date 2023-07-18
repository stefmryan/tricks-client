import React, { useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import styles from "../Table/table.module.css";

const Table = ({ playerObjs }) => {
  //TODO: update round so we can keep track of what
  //round of cards the users are playing.
  const [players] = useState(playerObjs);
  return (
    <div className={styles.grid}>
      <div className={styles.grid_item1}>
        <PlayerHand round={1} name={players[1]} />
      </div>{" "}
      <div>
        <PlayerHand round={1} name={players[2]} />
      </div>
      <div>Kitty</div>
      <div>
        <PlayerHand round={1} name={players[3]} />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand round={1} name={players[0]} />
      </div>
    </div>
  );
};
export default Table;
