import React, { useState } from "react";
import PlayerHand from "./playerHand";
import Kitty from "./kitty";
import styles from "../components/Card/card.module.css";

const Table = ({ playerObjs }) => {
  //TODO: update round so we can keep track of what
  //round of cards the users are playing.
  const [players] = useState(playerObjs);
  return (
    <div className={styles.container}>
      {players.map((el, index) => {
        return (
          <div key={index}>
            {el}
            <PlayerHand round={1} />
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
