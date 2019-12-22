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
    predictedMoves: [],
  }

  onCellMouseEnter = (currentMousePosition) => {
    const { fileIndex, rankIndex } = currentMousePosition;
    this.setState({ fileIndex, rankIndex });
  }

  onCellSelect = (selectedPosition) => {
    const { selectedPiece } = this.state;
    const predictedMoves = Chessboard.getPossibleMoves(selectedPiece, selectedPosition);
    this.setState({ selectedPosition, predictedMoves }); 
  }

  onCellMouseLeave = () => {
    this.setState({ fileIndex: -1, rankIndex: -1 });
  }

  onPieceSelect = (selectedPiece) => {
    this.setState({ selectedPiece });
  }

  render() {
    const {
      selectedPosition, rankIndex, fileIndex, predictedMoves, selectedPiece,
    } = this.state;
    return (
      <div className="App">
        <PiecesList
          selectedPiece={selectedPiece}
          onPieceSelect={this.onPieceSelect}
        />
        {!selectedPiece && <h3 className="error">Please select a piece</h3>}
        {selectedPiece && (
          <ChessboardView
            onCellMouseEnter={this.onCellMouseEnter}
            onCellMouseLeave={this.onCellMouseLeave}
            onCellSelect={this.onCellSelect}
            selectedPosition={selectedPosition}
            rankIndex={rankIndex}
            fileIndex={fileIndex}
            predictedMoves={predictedMoves}
          />
        )}
      </div>
    );
  }
}
