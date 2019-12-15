/* eslint-disable no-use-before-define */
export default class Queen {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const moves = [];
    const leftDiagonalMoves = getLeftDiagonalMoves(fileIndex, rankIndex);
    const rightDiagonalMoves = getRightDiagonalMoves(fileIndex, rankIndex);
    const horizontalMoves = getHorizontalMoves(fileIndex, rankIndex);
    const verticalMoves = getVerticalMoves(fileIndex, rankIndex);

    return moves.concat(leftDiagonalMoves)
      .concat(rightDiagonalMoves)
      .concat(horizontalMoves)
      .concat(verticalMoves);
  }
}

function getHorizontalMoves(fileIndex, rankIndex) {
  const horizontalPositions = [];
  let currentRankIndex = rankIndex;
  if (currentRankIndex < 7) {
    currentRankIndex++;
    horizontalPositions.push({ fileIndex, rankIndex: currentRankIndex });
  }
  currentRankIndex = rankIndex;
  if (currentRankIndex > 0) {
    currentRankIndex--;
    horizontalPositions.push({ fileIndex, rankIndex: currentRankIndex });
  }
  return horizontalPositions;
}

function getLeftDiagonalMoves(fileIndex, rankIndex) {
  const leftDiagonalPositions = [];

  let currentRankIndex = rankIndex;
  let currentFileIndex = fileIndex;

  if (currentRankIndex < 7 && currentFileIndex < 7) {
    currentRankIndex++;
    currentFileIndex++;

    leftDiagonalPositions.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  currentRankIndex = rankIndex;
  currentFileIndex = fileIndex;

  if (currentRankIndex > 0 && currentFileIndex > 0) {
    currentRankIndex--;
    currentFileIndex--;

    leftDiagonalPositions.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  return leftDiagonalPositions;
}

function getRightDiagonalMoves(fileIndex, rankIndex) {
  const rightDiagonalPositions = [];

  let currentRankIndex = rankIndex;
  let currentFileIndex = fileIndex;

  if (currentRankIndex > 0 && currentFileIndex < 7) {
    currentRankIndex--;
    currentFileIndex++;

    rightDiagonalPositions.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  currentRankIndex = rankIndex;
  currentFileIndex = fileIndex;

  if (currentRankIndex < 7 && currentFileIndex > 0) {
    currentRankIndex++;
    currentFileIndex--;

    rightDiagonalPositions.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  return rightDiagonalPositions;
}

function getVerticalMoves(fileIndex, rankIndex) {
  const verticalPositions = [];
  let currentFileIndex = fileIndex;
  if (currentFileIndex < 7) {
    currentFileIndex++;
    verticalPositions.push({ fileIndex: currentFileIndex, rankIndex });
  }
  currentFileIndex = fileIndex;
  if (currentFileIndex > 0) {
    currentFileIndex--;
    verticalPositions.push({ fileIndex: currentFileIndex, rankIndex });
  }
  return verticalPositions;
}
