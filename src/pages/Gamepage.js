import React, { useState } from "react";
import Table from "../components/Table/table";
import { useLocation } from "react-router-dom";
import styles from "../pages/Gamepage.module.css";
import deckOfCard from "../utils/deckOfCards";
import { shuffle } from "../utils/gameLogic";

const GamePage = () => {
  const location = useLocation();
  let [players] = useState([location.state.players]);
  const [round /*setRound*/] = useState(1);
  const [deckofCards /*setDeckOfCards*/] = useState([...shuffle(deckOfCard)]);

  return (
    <div>
      <div className={styles.center}>Round {round}</div>
      <div className={styles.grid_container}>
        <div>placeholder for table</div>
        <Table
          playerObjs={
            location.state.players[0] === 1
              ? (players[0] = ["player", "opponent1", "opponent2", "opponent3"])
              : (players[0] = location.state.players)
          }
          deckofCards={deckofCards}
          round={round}
        />
      </div>
    </div>
  );
};
export default GamePage;
