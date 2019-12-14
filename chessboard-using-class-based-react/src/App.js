import React, { Component } from 'react';
import './App.css';
import PiecesList from './PiecesList';
import ChessboardView from './ChessboardView';

export default class App extends Component {
  state = { selectedPiece: "" }

  onPieceSelect = (selectedPiece) => {
    this.setState({ selectedPiece });
  }

  render() {
    return (
      <div className="App" >
        <PiecesList selectedPiece={this.state.selectedPiece} onPieceSelect={this.onPieceSelect} />
        <ChessboardView />
      </div>
    );
  }
}
