/* eslint-disable no-use-before-define */
export default class King {
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
  const horizontalMoves = [];
  let currentRankIndex = rankIndex;
  if (currentRankIndex < 7) {
    currentRankIndex++;
    horizontalMoves.push({ fileIndex, rankIndex: currentRankIndex });
  }
  currentRankIndex = rankIndex;
  if (currentRankIndex > 0) {
    currentRankIndex--;
    horizontalMoves.push({ fileIndex, rankIndex: currentRankIndex });
  }
  return horizontalMoves;
}

function getLeftDiagonalMoves(fileIndex, rankIndex) {
  const leftDiagonalMoves = [];

  let currentRankIndex = rankIndex;
  let currentFileIndex = fileIndex;

  if (currentRankIndex < 7 && currentFileIndex < 7) {
    currentRankIndex++;
    currentFileIndex++;

    leftDiagonalMoves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  currentRankIndex = rankIndex;
  currentFileIndex = fileIndex;

  if (currentRankIndex > 0 && currentFileIndex > 0) {
    currentRankIndex--;
    currentFileIndex--;

    leftDiagonalMoves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  return leftDiagonalMoves;
}

function getRightDiagonalMoves(fileIndex, rankIndex) {
  const rightDiagonalMoves = [];

  let currentRankIndex = rankIndex;
  let currentFileIndex = fileIndex;

  if (currentRankIndex > 0 && currentFileIndex < 7) {
    currentRankIndex--;
    currentFileIndex++;

    rightDiagonalMoves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  currentRankIndex = rankIndex;
  currentFileIndex = fileIndex;

  if (currentRankIndex < 7 && currentFileIndex > 0) {
    currentRankIndex++;
    currentFileIndex--;

    rightDiagonalMoves.push({
      rankIndex: currentRankIndex,
      fileIndex: currentFileIndex,
    });
  }

  return rightDiagonalMoves;
}

function getVerticalMoves(fileIndex, rankIndex) {
  const verticalMoves = [];
  let currentFileIndex = fileIndex;
  if (currentFileIndex < 7) {
    currentFileIndex++;
    verticalMoves.push({ fileIndex: currentFileIndex, rankIndex });
  }
  currentFileIndex = fileIndex;
  if (currentFileIndex > 0) {
    currentFileIndex--;
    verticalMoves.push({ fileIndex: currentFileIndex, rankIndex });
  }
  return verticalMoves;
}
