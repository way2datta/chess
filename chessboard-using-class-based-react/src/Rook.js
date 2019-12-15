import { getHorizontalMoves } from "./getHorizontalMoves";
import { getVerticalMoves } from "./getVerticalMoves";

export default class Rook {
    getPossibleMoves = (fileIndex, rankIndex) => {
        var horizontalMoves = this.getHorizontalMoves(fileIndex, rankIndex);
        var verticalMoves = this.getVerticalMoves(fileIndex, rankIndex);
        return horizontalMoves.concat(verticalMoves);
    };
    getHorizontalMoves(fileIndex, rankIndex) {
        return getHorizontalMoves(rankIndex, fileIndex);
    }
    getVerticalMoves(fileIndex, rankIndex) {
        return getVerticalMoves(fileIndex, rankIndex);
    }
}
