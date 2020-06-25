import Point from './../Point';
export function getRightDiagonalMoves(position: Point) {
  const { fileIndex, rankIndex } = position;
  const rightDiagonalMoves = [];

  let currentRankIndex = rankIndex;
  let currentFileIndex = fileIndex;

  while (currentRankIndex > 0 && currentFileIndex < 7) {
    currentRankIndex--;
    currentFileIndex++;

    rightDiagonalMoves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  currentRankIndex = rankIndex;
  currentFileIndex = fileIndex;

  while (currentRankIndex < 7 && currentFileIndex > 0) {
    currentRankIndex++;
    currentFileIndex--;

    rightDiagonalMoves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  return rightDiagonalMoves;
}
