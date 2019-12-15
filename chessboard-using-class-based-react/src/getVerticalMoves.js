export function getVerticalMoves(fileIndex, rankIndex) {
  const verticalPositions = [];
  let currentFileIndex = fileIndex;
  while (currentFileIndex < 7) {
    currentFileIndex++;
    verticalPositions.push({ fileIndex: currentFileIndex, rankIndex });
  }
  currentFileIndex = fileIndex;
  while (currentFileIndex > 0) {
    currentFileIndex--;
    verticalPositions.push({ fileIndex: currentFileIndex, rankIndex });
  }
  return verticalPositions;
}
