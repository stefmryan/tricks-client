import React, { useState } from "react";
import Table from "../components/Table/table";
import { useLocation } from "react-router-dom";
import styles from "../pages/Gamepage.module.css";

const GamePage = () => {
  const location = useLocation();
  let [players] = useState([location.state.players]);

  return (
    <div className={styles.container}>
      <Table
        playerObjs={
          location.state.players[0] === 1
            ? (players[0] = ["player", "opponent1", "opponent2"])
            : (players[0] = location.state.players)
        }
      />
    </div>
  );
};
export default GamePage;
