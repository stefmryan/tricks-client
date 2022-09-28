import React, { useState } from "react";
import Card from "./card";

const Kitty = () => {
  const [cards, setCards] = useState([
    {
      suit: "",
      face: "",
      value: 0,
      image: "red2.png",
    },
  ]);
  console.log(cards);
  return (
    <div>
      <Card isFront={false} setPlayerHand={setCards} />
    </div>
  );
};
export default Kitty;
