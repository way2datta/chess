import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chessboard from '../lib/Chessboard';
import Cell from './Cell';

export default class ChessboardView extends Component {
  renderBoard() {
    const {
      onCellMouseEnter, onCellMouseLeave, onCellSelect,
      selectedPosition, predictedMoves,
    } = this.props;

    const shouldHighlightCell = (currentPosition) => {
      const { fileIndex, rankIndex } = currentPosition;
      return predictedMoves.some((x) => x.fileIndex === fileIndex
        && x.rankIndex === rankIndex);
    };

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
              highlight={shouldHighlightCell({ fileIndex, rankIndex })}
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
        {this.renderBoard()}
        {fileIndex !== -1 && <span className="selected-position-text">{positionText}</span>}
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
  predictedMoves: PropTypes.array.isRequired,
};
