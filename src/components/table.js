import React, { useState } from "react";
import PlayerHand from "./playerHand";
import Card from "./card";

const Table = ({ playerObjs }) => {
  //TODO: update round so we can keep track of what
  //round of cards the users are playing.
  const [players] = useState(playerObjs);
  return (
    <div id='container'>
      {players.map((el, index) => {
        return (
          <div key={index}>
            <PlayerHand round={1} />
          </div>
        );
      })}
      <div id='kitty'>
        <Card isFront={false} />
      </div>
    </div>
  );
};
export default Table;
