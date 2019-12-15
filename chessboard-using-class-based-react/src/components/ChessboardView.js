import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chessboard from '../lib/Chessboard';
import Cell from './Cell';

export default class ChessboardView extends Component {
  renderEmptyBoard() {
    const {
      onCellMouseEnter, onCellMouseLeave, onCellSelect,
      selectedPosition, possibleMoves,
    } = this.props;

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
              onCellMouseEnter={onCellMouseEnter}
              onCellMouseLeave={onCellMouseLeave}
              onCellSelect={onCellSelect}
              selectedPosition={selectedPosition}
              highlight={possibleMoves.some((x) => x.fileIndex === fileIndex
                && x.rankIndex === rankIndex)}
            />
          ))
        }
      </div>
    ));
  }

  render() {
    const { fileIndex, rankIndex } = this.props;
    const positionText = `File index: ${fileIndex}, Rank index: ${rankIndex}`;
    return (
      <div className="chessboard">
        {this.renderEmptyBoard()}
        {fileIndex !== -1 && positionText}
      </div>
    );
  }
}

ChessboardView.propTypes = {
  selectedPosition: PropTypes.object.isRequired,
  onCellMouseEnter: PropTypes.func.isRequired,
  onCellMouseLeave: PropTypes.func.isRequired,
  onCellSelect: PropTypes.func.isRequired,
  fileIndex: PropTypes.number.isRequired,
  rankIndex: PropTypes.number.isRequired,
  possibleMoves: PropTypes.array.isRequired,
};
