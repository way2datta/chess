export function getVerticalMoves(fileIndex, rankIndex) {
  const verticalMoves = [];
  let currentFileIndex = fileIndex;
  while (currentFileIndex < 7) {
    currentFileIndex++;
    verticalMoves.push({ fileIndex: currentFileIndex, rankIndex });
  }
  currentFileIndex = fileIndex;
  while (currentFileIndex > 0) {
    currentFileIndex--;
    verticalMoves.push({ fileIndex: currentFileIndex, rankIndex });
  }
  return verticalMoves;
}
