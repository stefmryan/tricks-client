import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Gamepage from "./pages/Gamepage";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/game' element={<Gamepage />} />
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
