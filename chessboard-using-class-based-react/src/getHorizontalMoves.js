export function getHorizontalMoves(rankIndex, fileIndex) {
  const horizontalPositions = [];
  let currentRankIndex = rankIndex;
  while (currentRankIndex < 7) {
    currentRankIndex++;
    horizontalPositions.push({ fileIndex, rankIndex: currentRankIndex });
  }
  currentRankIndex = rankIndex;
  while (currentRankIndex > 0) {
    currentRankIndex--;
    horizontalPositions.push({ fileIndex, rankIndex: currentRankIndex });
  }
  return horizontalPositions;
}
