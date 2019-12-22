export function getHorizontalMoves(fileIndex, rankIndex) {
  const horizontalMoves = [];
  let currentRankIndex = rankIndex;
  while (currentRankIndex < 7) {
    currentRankIndex++;
    horizontalMoves.push({ fileIndex, rankIndex: currentRankIndex });
  }
  currentRankIndex = rankIndex;
  while (currentRankIndex > 0) {
    currentRankIndex--;
    horizontalMoves.push({ fileIndex, rankIndex: currentRankIndex });
  }
  return horizontalMoves;
}
