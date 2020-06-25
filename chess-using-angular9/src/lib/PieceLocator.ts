import Rook from './pieces/Rook';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';
import Pawn from './pieces/Pawn';
import Horse from './pieces/Horse';
import PieceType from "./PieceType";

export class PieceLocator {
  static getPiece(pieceName) {
    switch (pieceName.toLowerCase()) {
      case PieceType.Rook:
        return new Rook();
      case PieceType.Bishop:
        return new Bishop();
      case PieceType.Queen:
        return new Queen();
      case PieceType.King:
        return new King();
      case PieceType.Pawn:
        return new Pawn();
      case PieceType.Horse:
        return new Horse();
      default:
        throw Error('Invalid piece.');
    }
  }
}
