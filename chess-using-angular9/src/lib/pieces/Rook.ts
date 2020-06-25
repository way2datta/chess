import { getHorizontalMoves } from '../movements/HorizontalMoveProvider';
import { getVerticalMoves } from '../movements/VerticalMovesProvider';
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
