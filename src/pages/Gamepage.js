import React, { useState } from "react";
import Table from "../components/Table/table";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../pages/Gamepage.module.css";
import deckOfCard from "../utils/deckOfCards";
import { shuffle } from "../utils/gameLogic";

const GamePage = () => {
  const location = useLocation();
  let [players] = useState([location.state.players]);
  const [round /*setRound*/] = useState(2);
  const [deckofCards /*setDeckOfCards*/] = useState([...shuffle(deckOfCard)]);

  const navigate = useNavigate();

  const returnToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <button type='button' onClick={returnToHomePage}>
        Return to Homepage
      </button>
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
        />
      </div>
    </div>
  );
};
export default GamePage;
