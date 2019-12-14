import React, { Component } from 'react';
import Chessboard from './Chessboard';
import Cell from './Cell';

export default class ChessboardView extends Component {
  state = {
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

  renderEmptyBoard() {
    return Chessboard.fileTitles.map((fileTitle, fileIndex) => (
      <div key={fileTitle} className="row">
        {
          Chessboard.rankTitles.map((rankTitle, rankIndex) => (
            <Cell
              key={rankTitle}
              rankIndex={rankIndex}
              rankTitle={rankTitle}
              fileIndex={fileIndex}
              fileTitle={fileTitle}
              onCellMouseEnter={this.onCellMouseEnter}
              onCellMouseLeave={this.onCellMouseLeave}
              onCellSelect={this.onCellSelect}
              selectedPosition={this.state.selectedPosition}
            />
          ))
        }
      </div>
    ));
  }

  render() {
    const { fileIndex, rankIndex } = this.state;
    const positionText = `File index: ${fileIndex}, Rank index: ${rankIndex}`;
    return (
      <div className="chessboard">
        {this.renderEmptyBoard()}
        {fileIndex !== -1 && positionText}
      </div>
    );
  }
}
