import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const navigateTo = (e) => {
    let value = parseInt(e.target.value);
    let newArr = [];
    for (let i = 0; i < value; i++) {
      let player = `player${i + 1}`;
      newArr.push(player);
    }
    navigate("/game", { state: { players: newArr } });
  };
  return (
    <div>
      <button type='button' value='3' onClick={(e) => navigateTo(e)}>
        3 player game
      </button>
    </div>
  );
};
export default Homepage;
