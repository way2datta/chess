import IPiece from './IPiece';
import Point from '../Point';

export default class Pawn implements IPiece {
  getPossibleMoves = (position: Point): Point[] => {
    const { fileIndex, rankIndex } = position;
    const moves = [];
    if (fileIndex < 7) {
      moves.push({ rankIndex, fileIndex: fileIndex + 1 });
      if (rankIndex > 0) {
        moves.push({ rankIndex: rankIndex - 1, fileIndex: fileIndex + 1 });
      }
      if (rankIndex < 7) {
        moves.push({ rankIndex: rankIndex + 1, fileIndex: fileIndex + 1 });
      }
    }
    return moves;
  }
}
