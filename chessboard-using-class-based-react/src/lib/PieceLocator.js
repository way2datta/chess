import Rook from './Rook';
import Bishop from './Bishop';
import Queen from './Queen';

export class PieceLocator {
  static getPiece(selectedPiece) {
    switch (selectedPiece.toLowerCase()) {
      case 'rook':
        return new Rook();
      case 'bishop':
        return new Bishop();
      case 'queen':
        return new Queen();
      default:
        throw Error('Invalid piece.');
    }
  }
}
