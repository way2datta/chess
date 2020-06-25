import PieceType from "./PieceType";

export function getPieces() {
  return [
    { name: PieceType.King },
    { name: PieceType.Queen },
    { name: PieceType.Bishop },
    { name: PieceType.Horse },
    { name: PieceType.Rook },
    { name: PieceType.Pawn },
  ];
}
