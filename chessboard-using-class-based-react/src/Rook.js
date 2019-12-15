import { getHorizontalMoves } from './getHorizontalMoves';
import { getVerticalMoves } from './getVerticalMoves';

export default class Rook {
    getPossibleMoves = (fileIndex, rankIndex) => {
      const horizontalMoves = this.getHorizontalMoves(fileIndex, rankIndex);
      const verticalMoves = this.getVerticalMoves(fileIndex, rankIndex);
      return horizontalMoves.concat(verticalMoves);
    };

    getHorizontalMoves(fileIndex, rankIndex) {
      return getHorizontalMoves(rankIndex, fileIndex);
    }

    getVerticalMoves(fileIndex, rankIndex) {
      return getVerticalMoves(fileIndex, rankIndex);
    }
}
