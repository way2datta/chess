import { PieceLocator } from './PieceLocator';
import Point from './Point';
export default {
  rankTitles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  fileTitles: ['1', '2', '3', '4', '5', '6', '7', '8'],
  getPossibleMoves(pieceName: string, position: Point) {
    const piece = PieceLocator.getPiece(pieceName);
    return piece.getPossibleMoves(position);
  },
};
