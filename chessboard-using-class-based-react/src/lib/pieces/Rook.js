import { getHorizontalMoves } from '../movements/getHorizontalMoves';
import { getVerticalMoves } from '../movements/getVerticalMoves';

export default class Rook {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const horizontalMoves = getHorizontalMoves(fileIndex, rankIndex);
    const verticalMoves = getVerticalMoves(fileIndex, rankIndex);
    return horizontalMoves.concat(verticalMoves);
  };
}
