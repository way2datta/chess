import { getLeftDiagonalMoves } from './../movements/getLeftDiagonalMoves';
import { getRightDiagonalMoves } from './../movements/getRightDiagonalMoves';

export default class Bishop {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const rightDiagonalMoves = getRightDiagonalMoves(fileIndex, rankIndex);
    const leftDiagonalMoves = getLeftDiagonalMoves(fileIndex, rankIndex);
    return rightDiagonalMoves.concat(leftDiagonalMoves);
  };
}
