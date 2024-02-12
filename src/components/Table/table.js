import React, { useState, useEffect } from "react";
import PlayerHand from "../PlayerHand/playerHand";
import styles from "../Table/table.module.css";
import Card from "../Card/card";
import deckOfCard from "../../utils/deckOfCards";
import { shuffle } from "../../utils/gameLogic";
import GameModal from "../GameModal/gameModal"

const Table = ({ deckofCards }) => {
  //const [players] = useState(playerObjs);
  const [kitty, setKitty] = useState([]);
  const [displayRoundButton, setDisplayRoundButton] = useState(false);
  const [trumpCard, setTrumpCard] = useState([deckofCards.pop()]);
  const [round, setRound] = useState(1);
  const [participantsArr, setParticipantsArr] = useState([

    { name: "player", hand: [deckofCards.pop()], cardPlayed: {}, winningHands: 0 },
    { name: "opponent1", hand: [deckofCards.pop()], cardPlayed: {}, winningHands: 0 },
    { name: "opponent2", hand: [deckofCards.pop()], cardPlayed: {}, winningHands: 0 },
    { name: "opponent3", hand: [deckofCards.pop()], cardPlayed: {}, winningHands: 0 }
  ])
  const [winningCard, setWinningCard] = useState()
  const [show, setShow] = useState(false);

  useEffect(() => {
    //determining the winning card in the Kitty
    if (kitty.length === 4) {
      console.log("Player Obj")
      console.log(participantsArr[0]);
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
      setShow(true);
    }
  }, [kitty])

  const dealNewHand = () => {
    //shuffle deck and give cards to player and opponents.
    //Set new Trump card if able
    console.log("in dealNewHand");
    const shuffledDeck = [...shuffle(deckOfCard)]

    const player = participantsArr[0]
    const opp1 = participantsArr[1]
    const opp2 = participantsArr[2]
    const opp3 = participantsArr[3]

    player.hand = shuffledDeck.splice(0, round + 1)
    opp2.hand = shuffledDeck.splice(0, round + 1)
    opp1.hand = shuffledDeck.splice(0, round + 1)
    opp3.hand = shuffledDeck.splice(0, round + 1)

    setParticipantsArr([player, opp1, opp2, opp3])

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
      <GameModal show={show} setShow={setShow} winningCard={winningCard} participantsArr={participantsArr} />
      <div className={styles.grid_item1}>
        <PlayerHand
          name={participantsArr[1].name}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsArr[1].hand}
        />
      </div>{" "}
      <div>
        <PlayerHand
          name={participantsArr[2].name}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsArr[2].hand}
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

            card={trumpCard[0]}
            isOpponent={true}
          />
        </div>
        {/* <div>
          <strong>WINNING CARD</strong>
          <Card
            setKitty={setKitty}
            kitty={kitty}
            card={winningCard}
            isOpponent={true}
          />
        </div> */}
      </div>
      <div>
        <PlayerHand
          name={participantsArr[3].name}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsArr[3].hand}
        />
      </div>
      <div className={styles.grid_item1}>
        <PlayerHand
          name={participantsArr[0].name}
          setKitty={setKitty}
          kitty={kitty}
          hand={participantsArr[0].hand}
          setParticipantsArr={setParticipantsArr}
          participantsArr={participantsArr}
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
