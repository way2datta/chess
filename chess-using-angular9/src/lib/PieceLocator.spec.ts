
import PieceType from "./PieceType";
import { PieceLocator } from "./PieceLocator";

describe('PieceLocator', () => {
  [PieceType.Bishop, PieceType.Horse, PieceType.King, PieceType.Pawn,
  PieceType.Queen, PieceType.Rook].forEach((pieceType: PieceType) => {
    it(`should create a ${pieceType} piece`, () => {
      const piece = PieceLocator.getPiece(pieceType);
      const actualPiece = piece.constructor.name.toLowerCase();
      expect(actualPiece).toBe(pieceType)
    });
  })
});