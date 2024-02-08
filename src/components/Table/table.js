import React, { useState, useEffect } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import styles from "../Table/table.module.css";
import Card from "../Card/card";
import deckOfCard from "../../utils/deckOfCards";
import { shuffle } from "../../utils/gameLogic";

const Table = ({ playerObjs, deckofCards }) => {
  const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  const [displayRoundButton, setDisplayRoundButton] = useState(false);
  const [trumpCard, setTrumpCard] = useState([deckofCards.pop()]);
  const [round, setRound] = useState(1);
  const [participantsObj, setParticipantsObj] = useState({
    player: {
      hand: [deckofCards.pop()], cardPlayed: {}
    },
    opponent1: { hand: [deckofCards.pop()], cardPlayed: {} },
    opponent2: { hand: [deckofCards.pop()], cardPlayed: {} },
    opponent3: { hand: [deckofCards.pop()], cardPlayed: {} }
  })
  const [winningCard, setWinningCard] = useState()

  useEffect(() => {
    //determining the winning card in the Kitty
    if (kitty.length === 4) {
      console.log("Player Obj")
      console.log(participantsObj.player);
      const arr = []
      if (trumpCard.length !== 0) {
        kitty.forEach(card => {
          if (card.suit === trumpCard[0].suit) {
            arr.push(card);
          }
        })
      }

      if (arr.length === 1) {
        setWinningCard(arr[0]);
      }
      if (arr.length > 1) {
        setWinningCard(arr.reduce((a, b) => a.value > b.value ? a : b));
      }
      if (arr.length === 0) {
        const winningCard = kitty.reduce((a, b) => a.value > b.value ? a : b);
        setWinningCard(winningCard);
      }
    }
  }, [kitty])

  const dealNewHand = () => {
    //shuffle deck and give cards to player and opponents.
    //Set new Trump card if able
    console.log("in dealNewHand");
    const shuffledDeck = [...shuffle(deckOfCard)]
    setParticipantsObj({ player: { hand: shuffledDeck.splice(0, round + 1) }, opponent1: { hand: shuffledDeck.splice(0, round + 1) }, opponent2: { hand: shuffledDeck.splice(0, round + 1) }, opponent3: { hand: shuffledDeck.splice(0, round + 1) } })

    setKitty([])
    if (shuffledDeck.length !== 0) {
      setTrumpCard([shuffledDeck.pop()]);

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
          hand={participantsObj.opponent1.hand}
        />
      </div>{" "}
      <div>
        <PlayerHand
          name={players[2]}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsObj.opponent2.hand}
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
        <div>
          <strong>WINNING CARD</strong>
          <Card
            setKitty={setKitty}
            kitty={kitty}
            card={winningCard}
            isOpponent={true}
          />
        </div>
      </div>
      <div>
        <PlayerHand
          name={players[3]}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsObj.opponent3.hand}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          name={players[0]}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsObj.player.hand}
          setParticipantsObj={setParticipantsObj}
          participantsObj={participantsObj}
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
