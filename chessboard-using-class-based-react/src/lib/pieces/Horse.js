
export default class Rook {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const movesByRank = this.getMoveByRank(fileIndex, rankIndex);
    const movesByFile = this.getMovesByFile(fileIndex, rankIndex);
    return movesByRank.concat(movesByFile);
  }

  getMovesByFile(fileIndex, rankIndex) {
    const currentRankIndex = rankIndex;
    const currentFileIndex = fileIndex;

    let possibleFileIndex = currentFileIndex + 2;
    const possiblePositions = [];

    if (possibleFileIndex >= 0 && possibleFileIndex <= 7) {
      if (currentRankIndex + 1 >= 0 && currentRankIndex + 1 <= 7) {
        possiblePositions.push({
          rankIndex: currentRankIndex + 1,
          fileIndex: possibleFileIndex,
        });
      }
      if (currentRankIndex - 1 >= 0 && currentRankIndex - 1 <= 7) {
        possiblePositions.push({
          rankIndex: currentRankIndex - 1,
          fileIndex: possibleFileIndex,
        });
      }
    }

    possibleFileIndex = currentFileIndex - 2;

    if (possibleFileIndex >= 0 && possibleFileIndex <= 7) {
      if (currentRankIndex + 1 >= 0 && currentRankIndex + 1 <= 7) {
        possiblePositions.push({
          rankIndex: currentRankIndex + 1,
          fileIndex: possibleFileIndex,
        });
      }
      if (currentRankIndex - 1 >= 0 && currentRankIndex - 1 <= 7) {
        possiblePositions.push({
          rankIndex: currentRankIndex - 1,
          fileIndex: possibleFileIndex,
        });
      }
    }

    return possiblePositions;
  }

  getMoveByRank(fileIndex, rankIndex) {
    const currentRankIndex = rankIndex;
    const currentFileIndex = fileIndex;

    let possibleRankIndex = currentRankIndex + 2;
    const possiblePositions = [];

    if (possibleRankIndex >= 0 && possibleRankIndex <= 7) {
      if (currentFileIndex + 1 >= 0 && currentFileIndex + 1 <= 7) {
        possiblePositions.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex + 1,
        });
      }
      if (currentFileIndex - 1 >= 0 && currentFileIndex - 1 <= 7) {
        possiblePositions.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex - 1,
        });
      }
    }

    possibleRankIndex = currentRankIndex - 2;

    if (possibleRankIndex >= 0 && possibleRankIndex <= 7) {
      if (currentFileIndex + 1 >= 0 && currentFileIndex + 1 <= 7) {
        possiblePositions.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex + 1,
        });
      }
      if (currentFileIndex - 1 >= 0 && currentFileIndex - 1 <= 7) {
        possiblePositions.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex - 1,
        });
      }
    }

    return possiblePositions;
  }
}
