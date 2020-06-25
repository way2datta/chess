import { getLeftDiagonalMoves } from '../movements/getLeftDiagonalMoves';
import { getRightDiagonalMoves } from '../movements/getRightDiagonalMoves';
import IPiece from './IPiece';
import Point from './../Point';

export default class Bishop implements IPiece {
  getPossibleMoves = (position: Point): Point[] => {
    const rightDiagonalMoves = getRightDiagonalMoves(position);
    const leftDiagonalMoves = getLeftDiagonalMoves(position);
    return rightDiagonalMoves.concat(leftDiagonalMoves);
  }
}
