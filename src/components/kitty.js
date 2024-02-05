import React, { useState } from "react";
import Card from "./Card/card";

const Kitty = () => {
  const [, /*cards*/ setCards] = useState([
    {
      suit: "",
      face: "",
      value: 0,
      image: "red2.png",
    },
  ]);
  return (
    <div>
      <strong>
        Kitty
      </strong>
      <Card isFront={false} setPlayerHand={setCards} />
    </div>
  );
};
export default Kitty;
