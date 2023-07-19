import React, { useState } from "react";
import Table from "../components/Table/table";
import { useLocation } from "react-router-dom";
import styles from "../pages/Gamepage.module.css";

const GamePage = () => {
  const location = useLocation();
  let [players] = useState([location.state.players]);

  return (
    <div className={styles.container}>
      <table className={styles.table_container}>
        <tr>
          <th></th>
          <th>
            <table>
              <th>Player</th>
              <tr>
                <th>tricks said</th>
                <th>tricks played</th>
              </tr>
            </table>
          </th>
          <th>
            <table>
              <th>Opponent 1</th>
              <tr>
                <th>tricks said</th>
                <th>tricks played</th>
              </tr>
            </table>
          </th>
          <th>
            <table>
              <th>Opponent 2</th>
              <tr>
                <th>tricks said</th>
                <th>tricks played</th>
              </tr>
            </table>
          </th>
          <th>
            <table>
              <th>Opponent 3</th>
              <tr>
                <th>tricks said</th>
                <th>tricks played</th>
              </tr>
            </table>
          </th>
        </tr>
      </table>
      <Table
        playerObjs={
          location.state.players[0] === 1
            ? (players[0] = ["player", "opponent1", "opponent2", "opponent3"])
            : (players[0] = location.state.players)
        }
      />
    </div>
  );
};
export default GamePage;
