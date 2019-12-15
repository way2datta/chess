import Rook from './Rook';
import Bishop from './Bishop';

export class PieceLocator {
  static getPiece(selectedPiece) {
    switch (selectedPiece.toLowerCase()) {
      case 'rook':
        return new Rook();
      case 'bishop':
        return new Bishop();
      default:
        throw Error('Invalid piece.');
    }
  }
}
