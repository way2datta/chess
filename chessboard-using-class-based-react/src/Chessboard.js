import { PieceLocator } from './PieceLocator';

export default {
  rankTitles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  fileTitles: ['1', '2', '3', '4', '5', '6', '7', '8'],
  getPossibleMoves(selectedPiece, fileIndex, rankIndex) {
    const piece = PieceLocator.getPiece(selectedPiece);
    return piece.getPossibleMoves(fileIndex, rankIndex);
  },
};
