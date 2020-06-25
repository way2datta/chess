import Point from './../Point';

export function getVerticalMoves(position: Point) {
  const { fileIndex, rankIndex } = position;
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
