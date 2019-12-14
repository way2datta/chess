import React, { Component } from 'react';
import Chessboard from './Chessboard';
import Cell from './Cell';

export default class ChessboardView extends Component {
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
            />
          ))
        }
      </div>
    ));
  }

  render() {
    return (
      <div className="chessboard">
        {this.renderEmptyBoard()}
      </div>
    );
  }
}
