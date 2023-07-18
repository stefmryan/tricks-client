import React, { useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import Kitty from "../kitty";
import styles from "../Table/table.module.css";

const Table = ({ playerObjs }) => {
  //TODO: update round so we can keep track of what
  //round of cards the users are playing.
  const [players] = useState(playerObjs);
  return (
    <div className={styles.grid}>
      {players.map((el, index) => {
        return (
          <div key={index}>
            <PlayerHand round={1} name={el} />
          </div>
        );
      })}
      <div id={styles.kitty}>
        <Kitty />
      </div>
    </div>
  );
};
export default Table;
