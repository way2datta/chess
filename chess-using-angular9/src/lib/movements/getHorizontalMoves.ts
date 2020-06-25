import Point from './../Point';

export function getHorizontalMoves(position: Point) {
  const { fileIndex, rankIndex } = position;
  
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
