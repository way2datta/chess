export default class Rook {
    getPossibleMoves = (fileIndex, rankIndex) => {
        var horizontalMoves = this.getHorizontalMoves(fileIndex, rankIndex);
        var verticalMoves = this.getVerticalMoves(fileIndex, rankIndex);
        return horizontalMoves.concat(verticalMoves);
    };
    getHorizontalMoves(fileIndex, rankIndex) {
        var horizontalPositions = [];
        var currentRankIndex = rankIndex;
        while (currentRankIndex < 7) {
            currentRankIndex++;
            horizontalPositions.push({ fileIndex: fileIndex, rankIndex: currentRankIndex });
        }
        currentRankIndex = rankIndex;
        while (currentRankIndex > 0) {
            currentRankIndex--;
            horizontalPositions.push({ fileIndex: fileIndex, rankIndex: currentRankIndex });
        }
        return horizontalPositions;
    }
    getVerticalMoves(fileIndex, rankIndex) {
        var verticalPositions = [];
        var currentFileIndex = fileIndex;
        while (currentFileIndex < 7) {
            currentFileIndex++;
            verticalPositions.push({ fileIndex: currentFileIndex, rankIndex: rankIndex });
        }
        currentFileIndex = rankIndex;
        while (currentFileIndex > 0) {
            currentFileIndex--;
            verticalPositions.push({ fileIndex: currentFileIndex, rankIndex: rankIndex });
        }
        return verticalPositions;
    }
}
