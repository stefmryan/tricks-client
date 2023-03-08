import React, { useState } from "react";
import Card from "./Card/card";

const PlayerHand = (/*{ round }*/) => {
  //const [rounds] = useState(round);
  const [, setPlayerHand] = useState([]);
  //console.log(rounds);
  return (
    <div>
      <Card isFront={true} setPlayerHand={setPlayerHand} />
    </div>
  );
};
export default PlayerHand;
