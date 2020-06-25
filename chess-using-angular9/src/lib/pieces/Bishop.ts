import { getLeftDiagonalMoves } from '../movements/LeftDiagonalMoveProvider';
import { getRightDiagonalMoves } from '../movements/RightDiagonalMovesProvider';
import IPiece from './IPiece';
import Point from './../Point';

export default class Bishop implements IPiece {
  getPossibleMoves = (position: Point): Point[] => {
    const rightDiagonalMoves = getRightDiagonalMoves(position);
    const leftDiagonalMoves = getLeftDiagonalMoves(position);
    return rightDiagonalMoves.concat(leftDiagonalMoves);
  }
}
