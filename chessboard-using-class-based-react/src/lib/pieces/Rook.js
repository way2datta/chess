import { getHorizontalMoves } from '../movements/getHorizontalMoves';
import { getVerticalMoves } from '../movements/getVerticalMoves';

export default class Rook {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const horizontalMoves = this.getHorizontalMoves(fileIndex, rankIndex);
    const verticalMoves = this.getVerticalMoves(fileIndex, rankIndex);
    return horizontalMoves.concat(verticalMoves);
  };

  getHorizontalMoves(fileIndex, rankIndex) {
    return getHorizontalMoves(fileIndex, rankIndex);
  }

  getVerticalMoves(fileIndex, rankIndex) {
    return getVerticalMoves(fileIndex, rankIndex);
  }
}
