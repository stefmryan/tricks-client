import React from "react";
import "./App.css";
import Card from "./components/card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
