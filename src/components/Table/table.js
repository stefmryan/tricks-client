import React, { useEffect, useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import styles from "../Table/table.module.css";
import deckOfCard from "../../utils/deckOfCards";

const Table = ({ playerObjs }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  useEffect(() => {
    console.log(kitty);
  }, [kitty]);
  return (
    <div className={styles.grid}>
      <div className={styles.grid_item1}>
        <PlayerHand
          round={1}
          name={players[1]}
          setKitty={setKitty}
          kitty={kitty}
        />
      </div>{" "}
      <div>
        <PlayerHand
          round={1}
          name={players[2]}
          setKitty={setKitty}
          kitty={kitty}
        />
      </div>
      <div id={styles.kitty}>
        {kitty.map((card, index) => {
          return (
            <img
              key={index}
              id={index}
              src={`./images/cards/face/${deckOfCard[Number(card)].image}`}
              alt='face'
              width={150}
              height={200}
            />
          );
        })}
      </div>
      <div>
        <PlayerHand
          round={1}
          name={players[3]}
          setKitty={setKitty}
          kitty={kitty}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          round={1}
          name={players[0]}
          setKitty={setKitty}
          kitty={kitty}
        />
      </div>
    </div>
  );
};
export default Table;
