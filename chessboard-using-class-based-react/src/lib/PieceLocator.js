import Rook from './pieces/Rook';
import Bishop from './pieces/Bishop';
import Queen from './pieces/Queen';
import King from './pieces/King';

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
      default:
        throw Error('Invalid piece.');
    }
  }
}
