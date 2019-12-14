import React from 'react';
import './App.css';
import PiecesList from "./PiecesList";
import Chessboard from "./Chessboard";

function App() {
  return (
    <div className="App">
        <PiecesList />
        <Chessboard />
    </div>
  );
}

export default App;
