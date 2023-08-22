import React, { useState } from "react";
import Table from "../components/Table/table";
import { useLocation } from "react-router-dom";
import styles from "../pages/Gamepage.module.css";

const GamePage = () => {
  const location = useLocation();
  let [players] = useState([location.state.players]);
  const [round /*setRound*/] = useState(0);

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
        />
      </div>
    </div>
  );
};
export default GamePage;
