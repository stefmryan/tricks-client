import React, { useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import deckOfCard from "../../utils/deckOfCards";
import styles from "../Table/table.module.css";
import Card from "../Card/card";

const Table = ({ playerObjs, deckofCards, round }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  const [player1Hand] = useState([deckofCards[1]]);
  const [trumpCard /*setTrumpCard*/] = useState([deckofCards.pop()]);
  console.log(round);

  return (
    <div className={styles.grid}>
      <div className={styles.grid_item1}>
        <PlayerHand
          name={players[1]}
          setKitty={setKitty}
          kitty={kitty}
          hand={player1Hand}
        />
      </div>{" "}
      <div>
        <PlayerHand
          name={players[2]}
          setKitty={setKitty}
          kitty={kitty}
          hhand={player1Hand}
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
        <div>
          <strong>TRUMP CARD</strong>
          <Card
            setKitty={setKitty}
            kitty={kitty}
            hand={trumpCard[0]}
            isOpponent={false}
          />
        </div>
      </div>
      <div>
        <PlayerHand
          name={players[3]}
          setKitty={setKitty}
          kitty={kitty}
          hand={player1Hand}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          name={players[0]}
          setKitty={setKitty}
          kitty={kitty}
          hand={player1Hand}
        />
      </div>
    </div>
  );
};
export default Table;
