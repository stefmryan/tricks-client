import React, { useState } from "react";
import Card from "./card";

const Table = ({ playerObjs }) => {
  const [players] = useState(playerObjs);
  return (
    <div id='container'>
      {players.map((el, index) => {
        return (
          <div key={index}>
            <Card />
          </div>
        );
      })}
    </div>
  );
};
export default Table;
