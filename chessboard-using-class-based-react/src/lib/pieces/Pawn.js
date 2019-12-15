export default class Pawn {
  getPossibleMoves = (fileIndex, rankIndex) => {
    const moves = [];
    if (fileIndex < 7) {
      moves.push({ rankIndex, fileIndex: fileIndex + 1 });
      if (rankIndex > 0) {
        moves.push({ rankIndex: rankIndex - 1, fileIndex: fileIndex + 1 });
      }
      if (rankIndex < 7) {
        moves.push({ rankIndex: rankIndex + 1, fileIndex: fileIndex + 1 });
      }
    }
    return moves;
  }
}
