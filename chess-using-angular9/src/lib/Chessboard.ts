import { PieceLocator } from './PieceLocator';
import Point from './Point';
export default {
  getPossibleMoves(pieceName: string, position: Point) {
    const piece = PieceLocator.getPiece(pieceName);
    return piece.getPossibleMoves(position);
  },
};
