import React, { PureComponent } from 'react';
import { getPieces } from './PieceProvider';

export default class PiecesList extends PureComponent {
  render() {
    const pieces = getPieces();
    return (
      <ul className="pieces-list">
        {
          pieces.map((piece) => (
            <li key={piece.name}>
              {' '}
              {piece.name}
            </li>
          ))
        }
      </ul>
    );
  }
}
