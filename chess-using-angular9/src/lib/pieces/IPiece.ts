import Point from './../Point';

export default interface IPiece {
  getPossibleMoves(position: Point): Point[];
}
