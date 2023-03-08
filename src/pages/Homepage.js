import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [, setPlayers] = useState([]);
  const navigate = useNavigate();

  const playAloneButtonClicked = () => {
    setPlayers([1]);
    navigate("/game", { state: { players: [1] } });

    /*const navigateTo = (e) => {
    let value = parseInt(e.target.value);
    let newArr = [];
    for (let i = 0; i < value; i++) {
      let player = `player${i + 1}`;
      newArr.push(player);
    }
    navigate("/game", { state: { players: newArr } });*/
  };
  return (
    <div>
      <button type='button' onClick={playAloneButtonClicked}>
        Play Single Player
      </button>
      <button type='button'>Play Multiplayer</button>
    </div>
  );
};
export default Homepage;
