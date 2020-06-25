import { getLeftDiagonalMoves } from '../movements/getLeftDiagonalMoves';
import { getRightDiagonalMoves } from '../movements/getRightDiagonalMoves';
import { getHorizontalMoves } from '../movements/getHorizontalMoves';
import { getVerticalMoves } from '../movements/getVerticalMoves';
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
