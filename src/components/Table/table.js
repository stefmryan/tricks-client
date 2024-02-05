import React, { useState } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import styles from "../Table/table.module.css";
import Card from "../Card/card";
import deckOfCard from "../../utils/deckOfCards";
import { shuffle } from "../../utils/gameLogic";

const Table = ({ playerObjs, deckofCards }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  const [displayRoundButton, setDisplayRoundButton] = useState(false);
  const [player1Hand, setPlayer1Hand] = useState([deckofCards.pop()]);
  const [opponent1Hand, setOpponent1Hand] = useState([deckofCards.pop()]);
  const [opponent2Hand, setOpponent2Hand] = useState([deckofCards.pop()]);
  const [opponent3Hand, setOpponent3Hand] = useState([deckofCards.pop()]);
  const [trumpCard, setTrumpCard] = useState([
    deckofCards.length > 0 ? deckofCards.pop() : null,
  ]);
  const [round, setRound] = useState(1);

  const dealNewHand = () => {
    //shuffle deck and give cards to player and opponents.
    //Set new Trump card if able
    console.log("in dealNewHand");
    const shuffledDeck = [...shuffle(deckOfCard)]
    const playerHand = shuffledDeck.splice(0, round + 1)
    setOpponent1Hand(shuffledDeck.splice(0, round + 1))
    setOpponent2Hand(shuffledDeck.splice(0, round + 1))
    setOpponent3Hand(shuffledDeck.splice(0, round + 1))
    setPlayer1Hand(playerHand);
    setKitty([])
    if (shuffledDeck.length !== 0) {
      setTrumpCard([deckofCards.pop()]);

    }

  }
  const startNewRound = () => {
    //new round button disappears from DOM
    setDisplayRoundButton(false);
    setRound(round + 1)
    dealNewHand();
  }


  return (
    <div className={styles.grid}>
      <div className={styles.center}>Round {round}</div>
      <div className={styles.grid_item1}>
        <PlayerHand
          name={players[1]}
          setKitty={setKitty}
          kitty={kitty}
          hand={opponent1Hand}
        />
      </div>{" "}
      <div>
        <PlayerHand
          name={players[2]}
          setKitty={setKitty}
          kitty={kitty}
          hand={opponent2Hand}
        />
      </div>
      <div id={styles.kitty}>
        {kitty.map((card, index) => {
          return (
            <img
              key={index}
              id={`${card.suit}${card.face}`}
              src={`./images/cards/face/${card.image}`}
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
            card={trumpCard[0]}
            isOpponent={true}
          />
        </div>
      </div>
      <div>
        <PlayerHand
          name={players[3]}
          setKitty={setKitty}
          kitty={kitty}
          hand={opponent3Hand}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          name={players[0]}
          setKitty={setKitty}
          kitty={kitty}
          hand={player1Hand}
          setPlayer1Hand={setPlayer1Hand}
          setDisplayRoundButton={setDisplayRoundButton}
        />
      </div>
      <button
        type='button'
        className={displayRoundButton ? "" : styles.new_round_button}
        onClick={startNewRound}
      >
        New Round?
      </button>
    </div>
  );
};
export default Table;
