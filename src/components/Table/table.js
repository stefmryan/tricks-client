import React, { useEffect, useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import deckOfCard from "../../utils/deckOfCards";
import styles from "../Table/table.module.css";

const Table = ({ playerObjs, deckofCards, round }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [trumpCard, setTrumpCard] = useState([]);

  useEffect(() => {
    const amountOfCardsForRound = round * 4;
    const cardsForTheRound = deckofCards.slice(0, amountOfCardsForRound + 1);
    setTrumpCard([cardsForTheRound.pop()]);

    setPlayer1Hand([...cardsForTheRound]);
  }, []);
  console.log(deckofCards);
  return (
    <div className={styles.grid}>
      <div className={styles.grid_item1}>
        <PlayerHand
          round={1}
          name={players[1]}
          setKitty={setKitty}
          kitty={kitty}
          hand={deckofCards[0]}
          player1Hand={player1Hand}
          trumpCard={trumpCard}
        />
      </div>{" "}
      <div>
        <PlayerHand
          round={1}
          name={players[2]}
          setKitty={setKitty}
          kitty={kitty}
          hand={deckofCards[1]}
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
          hand={deckofCards[2]}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          round={1}
          name={players[0]}
          setKitty={setKitty}
          kitty={kitty}
          hand={deckofCards[3]}
        />
      </div>
    </div>
  );
};
export default Table;
