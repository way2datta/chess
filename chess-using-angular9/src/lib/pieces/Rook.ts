import { getHorizontalMoves } from '../movements/getHorizontalMoves';
import { getVerticalMoves } from '../movements/getVerticalMoves';
import IPiece from './IPiece';
import Point from '../Point';

export default class Rook implements IPiece {
  getPossibleMoves = (position: Point): Point[] => {
    const {fileIndex, rankIndex} = position;
    const horizontalMoves = getHorizontalMoves(position);
    const verticalMoves = getVerticalMoves(position);
    return horizontalMoves.concat(verticalMoves);
  }
}
