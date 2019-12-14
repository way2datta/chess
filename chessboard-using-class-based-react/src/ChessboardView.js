import React, { Component } from 'react';
import Chessboard from './Chessboard';

export default class ChessboardView extends Component {
  static renderEmptyBoard() {
    return Chessboard.fileTitles.map((fileTitle) => (
      <div key={fileTitle} className="row">
        {
          Chessboard.rankTitles.map((rankTitle) => <div key={rankTitle} className="cell">{`${`${rankTitle}${fileTitle}`}`}</div>)
        }
      </div>
    ));
  }

  render() {
    return (
      <div className="chessboard">
        {ChessboardView.renderEmptyBoard()}
      </div>
    );
  }
}
