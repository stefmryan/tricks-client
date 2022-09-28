import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate("/game");
  return (
    <div>
      <button type='button' value='3' onClick={navigateTo}>
        3 player game
      </button>
    </div>
  );
};
export default Homepage;
