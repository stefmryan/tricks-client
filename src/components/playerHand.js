import React, { useState } from "react";
import Card from "./card";

const PlayerHand = ({ round }) => {
  const [rounds] = useState(round);
  console.log(rounds);
  return (
    <div>
      <Card isFront={true} />
    </div>
  );
};
export default PlayerHand;
