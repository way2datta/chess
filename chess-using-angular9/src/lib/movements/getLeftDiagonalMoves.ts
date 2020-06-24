export function getLeftDiagonalMoves(fileIndex, rankIndex) {
  const leftDiagonalMooves = [];

  let currentRankIndex = rankIndex;
  let currentFileIndex = fileIndex;

  while (currentRankIndex < 7 && currentFileIndex < 7) {
    currentRankIndex++;
    currentFileIndex++;

    leftDiagonalMooves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  currentRankIndex = rankIndex;
  currentFileIndex = fileIndex;

  while (currentRankIndex > 0 && currentFileIndex > 0) {
    currentRankIndex--;
    currentFileIndex--;

    leftDiagonalMooves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  return leftDiagonalMooves;
}
