import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getPieces } from '../lib/PieceProvider';

export default class PiecesList extends PureComponent {
  render() {
    const { selectedPiece, onPieceSelect } = this.props;
    const pieces = getPieces();
    return (
      <ul className="pieces-list">
        {
          pieces.map((piece) => (
            <li
              key={piece.name}
              className={piece.name === selectedPiece ? '-selected' : ''}
              onClick={() => onPieceSelect(piece.name)}
            >
              {' '}
              {piece.name}
            </li>
          ))
        }
      </ul>
    );
  }
}

PiecesList.propTypes = {
  selectedPiece: PropTypes.string.isRequired,
  onPieceSelect: PropTypes.func.isRequired,
};
