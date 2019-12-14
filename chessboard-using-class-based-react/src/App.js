import React from 'react';
import './App.css';
import PiecesList from "./PiecesList";
import ChessboardView from "./ChessboardView";

function App() {
  return (
    <div className="App">
        <PiecesList />
        <ChessboardView />
    </div>
  );
}

export default App;
