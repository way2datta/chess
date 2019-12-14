import React, { Component } from 'react';
import Chessboard from './Chessboard';

export default class ChessboardView extends Component {
  getAdditionalCssClasses(fileIndex, rankIndex) {
    if (fileIndex % 2 === 0) {
      return rankIndex % 2 === 0 ? "white" : "black";
    }
    return rankIndex % 2 === 0 ? "black" : "white";
  }
  renderEmptyBoard() {
    return Chessboard.fileTitles.map((fileTitle, fileIndex) => (
      <div key={fileTitle} className='row'>
        {
          Chessboard.rankTitles.map((rankTitle, rankIndex) => (
            <div key={rankTitle} className={`cell ${this.getAdditionalCssClasses(fileIndex, rankIndex)}`}>
              {`${`${rankTitle}${fileTitle}`}`}
            </div>
          ))
        }
      </div >
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
