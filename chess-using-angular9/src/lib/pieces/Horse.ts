import Point from './../Point';
import IPiece from './IPiece';

export default class Horse implements IPiece {
  getPossibleMoves = (position: Point): Point[] => {
    const movesByRank = this.getMoveByRank(position);
    const movesByFile = this.getMovesByFile(position);
    return movesByRank.concat(movesByFile);
  }

  getMovesByFile(position: Point) {
    const { fileIndex, rankIndex } = position;
    const currentRankIndex = rankIndex;
    const currentFileIndex = fileIndex;

    let possibleFileIndex = currentFileIndex + 2;
    const possibleMoves = [];

    if (possibleFileIndex >= 0 && possibleFileIndex <= 7) {
      if (currentRankIndex + 1 >= 0 && currentRankIndex + 1 <= 7) {
        possibleMoves.push({
          rankIndex: currentRankIndex + 1,
          fileIndex: possibleFileIndex,
        });
      }
      if (currentRankIndex - 1 >= 0 && currentRankIndex - 1 <= 7) {
        possibleMoves.push({
          rankIndex: currentRankIndex - 1,
          fileIndex: possibleFileIndex,
        });
      }
    }

    possibleFileIndex = currentFileIndex - 2;

    if (possibleFileIndex >= 0 && possibleFileIndex <= 7) {
      if (currentRankIndex + 1 >= 0 && currentRankIndex + 1 <= 7) {
        possibleMoves.push({
          rankIndex: currentRankIndex + 1,
          fileIndex: possibleFileIndex,
        });
      }
      if (currentRankIndex - 1 >= 0 && currentRankIndex - 1 <= 7) {
        possibleMoves.push({
          rankIndex: currentRankIndex - 1,
          fileIndex: possibleFileIndex,
        });
      }
    }

    return possibleMoves;
  }

  getMoveByRank(position: Point) {
    const { fileIndex, rankIndex } = position;
    const currentRankIndex = rankIndex;
    const currentFileIndex = fileIndex;

    let possibleRankIndex = currentRankIndex + 2;
    const possibleMoves = [];

    if (possibleRankIndex >= 0 && possibleRankIndex <= 7) {
      if (currentFileIndex + 1 >= 0 && currentFileIndex + 1 <= 7) {
        possibleMoves.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex + 1,
        });
      }
      if (currentFileIndex - 1 >= 0 && currentFileIndex - 1 <= 7) {
        possibleMoves.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex - 1,
        });
      }
    }

    possibleRankIndex = currentRankIndex - 2;

    if (possibleRankIndex >= 0 && possibleRankIndex <= 7) {
      if (currentFileIndex + 1 >= 0 && currentFileIndex + 1 <= 7) {
        possibleMoves.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex + 1,
        });
      }
      if (currentFileIndex - 1 >= 0 && currentFileIndex - 1 <= 7) {
        possibleMoves.push({
          rankIndex: possibleRankIndex,
          fileIndex: currentFileIndex - 1,
        });
      }
    }

    return possibleMoves;
  }
}
