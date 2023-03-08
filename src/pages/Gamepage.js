import React, { useState } from "react";
import Table from "../components/table";
import { useLocation } from "react-router-dom";

const GamePage = () => {
  const location = useLocation();
  let [players] = useState([location.state.players]);

  return (
    <div>
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
