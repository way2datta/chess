import { getLeftDiagonalMoves } from './getLeftDiagonalMoves';
import { getRightDiagonalMoves } from './getRightDiagonalMoves';

export default class Bishop {
    getPossibleMoves = (fileIndex, rankIndex) => {
      const rightDiagonalMoves = getRightDiagonalMoves(fileIndex, rankIndex);
      const leftDiagonalMoves = getLeftDiagonalMoves(fileIndex, rankIndex);
      return rightDiagonalMoves.concat(leftDiagonalMoves);
    };
}
