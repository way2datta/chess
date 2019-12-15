import React, { Component } from 'react';
import PiecesList from './PiecesList';
import ChessboardView from './ChessboardView';
import Chessboard from '../lib/Chessboard';
import './App.css';

export default class App extends Component {
  state = {
    selectedPiece: '',
    fileIndex: -1,
    rankIndex: -1,
    selectedPosition: {},
    possibleMoves: [],
  }

  onCellMouseEnter = (fileIndex, rankIndex) => {
    this.setState({ fileIndex, rankIndex });
  }

  onCellSelect = (fileIndex, rankIndex) => {
    const selectedPosition = { fileIndex, rankIndex };
    const { selectedPiece } = this.state;
    const possibleMoves = Chessboard.getPossibleMoves(selectedPiece,
      fileIndex, rankIndex);
    this.setState({ selectedPosition, possibleMoves });
  }

  onCellMouseLeave = () => {
    this.setState({ fileIndex: -1, rankIndex: -1 });
  }

  onPieceSelect = (selectedPiece) => {
    this.setState({ selectedPiece });
  }

  render() {
    const {
      selectedPosition, rankIndex, fileIndex, possibleMoves, selectedPiece,
    } = this.state;
    return (
      <div className="App">
        <PiecesList
          selectedPiece={selectedPiece}
          onPieceSelect={this.onPieceSelect}
        />
        <ChessboardView
          onCellMouseEnter={this.onCellMouseEnter}
          onCellMouseLeave={this.onCellMouseLeave}
          onCellSelect={this.onCellSelect}
          selectedPosition={selectedPosition}
          rankIndex={rankIndex}
          fileIndex={fileIndex}
          possibleMoves={possibleMoves}
        />
      </div>
    );
  }
}
