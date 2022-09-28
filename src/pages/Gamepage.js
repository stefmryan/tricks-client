import React, { useState } from "react";
import Table from "../components/table";
import { useLocation } from "react-router-dom";

const GamePage = () => {
  const location = useLocation();
  const playerObj = location.state.players;
  const [players] = useState(playerObj);

  return (
    <div>
      <Table playerObjs={players} />
    </div>
  );
};
export default GamePage;
