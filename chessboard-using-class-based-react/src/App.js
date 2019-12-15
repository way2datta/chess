import React, { Component } from 'react';
import './App.css';
import PiecesList from './PiecesList';
import ChessboardView from './ChessboardView';
import Chessboard from "./Chessboard";

export default class App extends Component {
  state = {
    selectedPiece: "",
    fileIndex: -1,
    rankIndex: -1,
    selectedPosition: {},
    possibleMoves: []
  }

  onCellMouseEnter = (fileIndex, rankIndex) => {
    this.setState({ fileIndex, rankIndex });
  }

  onCellSelect = (fileIndex, rankIndex) => {
    const selectedPosition = { fileIndex, rankIndex }
    const possibleMoves = Chessboard.getPossibleMoves(this.state.selectedPiece,
      fileIndex, rankIndex);
    this.setState({ selectedPosition, possibleMoves });
  }

  onCellMouseLeave = () => {
    this.setState({ fileIndex: -1, rankIndex: -1 });
  }

  onPieceSelect = (selectedPiece) => {
    const { fileIndex, rankIndex } = this.state.selectedPosition;

    // const possibleMoves = Chessboard.getPossibleMoves(this.state.selectedPiece,
    //   fileIndex, rankIndex);
    this.setState({ selectedPiece });
  }

  render() {
    return (
      <div className="App" >
        <PiecesList selectedPiece={this.state.selectedPiece}
          onPieceSelect={this.onPieceSelect} />
        <ChessboardView
          onCellMouseEnter={this.onCellMouseEnter}
          onCellMouseLeave={this.onCellMouseLeave}
          onCellSelect={this.onCellSelect}
          selectedPosition={this.state.selectedPosition}
          rankIndex={this.state.rankIndex}
          fileIndex={this.state.fileIndex}
        />
      </div>
    );
  }
}
