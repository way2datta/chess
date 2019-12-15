import Rook from './pieces/Rook';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';
import Pawn from './pieces/Pawn';
import Horse from './pieces/Horse';

export class PieceLocator {
  static getPiece(selectedPiece) {
    switch (selectedPiece.toLowerCase()) {
      case 'rook':
        return new Rook();
      case 'bishop':
        return new Bishop();
      case 'queen':
        return new Queen();
      case 'king':
        return new King();
      case 'pawn':
        return new Pawn();
      case 'horse':
        return new Horse();
      default:
        throw Error('Invalid piece.');
    }
  }
}
