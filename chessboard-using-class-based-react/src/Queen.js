import { getLeftDiagonalMoves } from './getLeftDiagonalMoves';
import { getRightDiagonalMoves } from './getRightDiagonalMoves';
import { getHorizontalMoves } from './getHorizontalMoves';
import { getVerticalMoves } from './getVerticalMoves';

export default class Queen {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const moves = [];
    const leftDiagonalMoves = getLeftDiagonalMoves(fileIndex, rankIndex);
    const rightDiagonalMoves = getRightDiagonalMoves(fileIndex, rankIndex);
    const horizontalMoves = getHorizontalMoves(fileIndex, rankIndex);
    const verticalMoves = getVerticalMoves(fileIndex, rankIndex);

    return moves.concat(leftDiagonalMoves)
      .concat(rightDiagonalMoves)
      .concat(horizontalMoves)
      .concat(verticalMoves);
  }
}
