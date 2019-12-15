import React, { Component } from 'react';
import './App.css';
import PiecesList from './PiecesList';
import ChessboardView from './ChessboardView';

export default class App extends Component {
  state = {
    selectedPiece: "",
    fileIndex: -1,
    rankIndex: -1,
    selectedPosition: {}
  }

  onCellMouseEnter = (fileIndex, rankIndex) => {
    this.setState({ fileIndex, rankIndex });
  }

  onCellSelect = (fileIndex, rankIndex) => {
    const selectedPosition = { fileIndex, rankIndex }
    this.setState({ selectedPosition });
  }

  onCellMouseLeave = () => {
    this.setState({ fileIndex: -1, rankIndex: -1 });
  }

  onPieceSelect = (selectedPiece) => {
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
