import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../src/singleplayer/pages/Homepage";
//import Gamepage from "./pages/Gamepage";
import Table from "../src/singleplayer/components/Table/table";
import deckOfCard from "../src/singleplayer/utils/deckOfCards";
import { shuffle } from "../src/singleplayer/utils/gameLogic";

function App() {
  const [deckofCards] = useState([...shuffle(deckOfCard)]);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/game' element={<Table deckofCards={deckofCards} />} />
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
