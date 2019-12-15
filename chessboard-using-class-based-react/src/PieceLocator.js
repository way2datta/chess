import Rook from './Rook';

export class PieceLocator {
  static getPiece(selectedPiece) {
    switch (selectedPiece.toLowerCase()) {
      case 'rook':
        return new Rook();
      default:
        throw Error('Invalid piece.');
    }
  }
}
