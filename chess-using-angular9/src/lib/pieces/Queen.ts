import { getLeftDiagonalMoves } from '../movements/LeftDiagonalMoveProvider';
import { getRightDiagonalMoves } from '../movements/RightDiagonalMovesProvider';
import { getHorizontalMoves } from '../movements/HorizontalMoveProvider';
import { getVerticalMoves } from '../movements/VerticalMovesProvider';
import IPiece from './IPiece';
import Point from '../Point';

export default class Queen implements IPiece{
  getPossibleMoves = (position: Point): Point[] => {
    const { fileIndex, rankIndex } = position;
    const moves = [];
    const leftDiagonalMoves = getLeftDiagonalMoves(position);
    const rightDiagonalMoves = getRightDiagonalMoves(position);
    const horizontalMoves = getHorizontalMoves(position);
    const verticalMoves = getVerticalMoves(position);

    return moves.concat(leftDiagonalMoves)
      .concat(rightDiagonalMoves)
      .concat(horizontalMoves)
      .concat(verticalMoves);
  }
}
