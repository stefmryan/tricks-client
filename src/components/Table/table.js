import React, { useEffect, useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import deckOfCard from "../../utils/deckOfCards";
import styles from "../Table/table.module.css";
import Card from "../Card/card";

const Table = ({ playerObjs, deckofCards, round }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [trumpCard /*setTrumpCard*/] = useState([deckofCards.pop()]);

  useEffect(() => {
    const amountOfCardsForRound = round * 4;
    const cardsForTheRound = deckofCards.slice(0, amountOfCardsForRound);
    setPlayer1Hand([...cardsForTheRound.slice(0, round)]);
  }, []);

  return (
    <div className={styles.grid}>
      <div className={styles.grid_item1}>
        <PlayerHand
          round={1}
          name={players[1]}
          setKitty={setKitty}
          kitty={kitty}
          hand={player1Hand}
          deckofCards={deckofCards}
        />
      </div>{" "}
      <div>
        <PlayerHand
          round={1}
          name={players[2]}
          setKitty={setKitty}
          kitty={kitty}
          hand={deckofCards[1]}
          trumpCard={trumpCard}
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
            player1Hand={player1Hand}
            isOpponent={false}
          />
        </div>
      </div>
      <div>
        <PlayerHand
          round={1}
          name={players[3]}
          setKitty={setKitty}
          kitty={kitty}
          hand={deckofCards[2]}
          trumpCard={trumpCard}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          round={1}
          name={players[0]}
          setKitty={setKitty}
          kitty={kitty}
          hand={deckofCards[3]}
          trumpCard={trumpCard}
        />
      </div>
    </div>
  );
};
export default Table;
