
import PieceType from "./PieceType";
import Chessboard from "./Chessboard";

const movesComparer = (current, next) => {
  return current.rankIndex - next.rankIndex;
}

describe('Chessboard', () => {
  describe('When pawn is selected', ()=>{
    [{
      currentPosition: { fileIndex: 0, rankIndex: 0 },
      expectedMoves: [{ rankIndex: 1, fileIndex: 1 }, { rankIndex: 0, fileIndex: 1 }]
    },
    {
      currentPosition: { fileIndex: 4, rankIndex: 4 },
      expectedMoves: [{ rankIndex: 3, fileIndex: 5 }, { rankIndex: 4, fileIndex: 5 }, { rankIndex: 5, fileIndex: 5 }]
    },
    {
      currentPosition: { fileIndex: 6, rankIndex: 7 },
      expectedMoves: [{ rankIndex: 6, fileIndex: 7 }, { rankIndex: 7, fileIndex: 7 }]
    }].forEach(({ currentPosition, expectedMoves }) => {
      it(`should give possible moves for current position: ${ JSON.stringify(currentPosition)}`, () => {
        const possibleMoves = Chessboard.getPossibleMoves(PieceType.Pawn, currentPosition);
        expect(possibleMoves.sort(movesComparer)).toEqual(expectedMoves.sort(movesComparer));
      });
    });
  
    [{
      currentPosition: { fileIndex: 7, rankIndex: 7 },
    },
    {
      currentPosition: { fileIndex: 7, rankIndex: 0 },
    }].forEach(({ currentPosition }) => {
      it(`should give no moves when reached to an end: ${ JSON.stringify(currentPosition)}`, () => {
        const possibleMoves = Chessboard.getPossibleMoves(PieceType.Pawn, currentPosition);
        const expectedMoves = [];
        expect(possibleMoves).toEqual(expectedMoves);
      });
    })
  });

  describe('When pawn is selected', ()=>{
    [{
      currentPosition: { fileIndex: 0, rankIndex: 0 },
      expectedMoves: [{ rankIndex: 1, fileIndex: 1 }, { rankIndex: 0, fileIndex: 1 }]
    },
    {
      currentPosition: { fileIndex: 4, rankIndex: 4 },
      expectedMoves: [{ rankIndex: 3, fileIndex: 5 }, { rankIndex: 4, fileIndex: 5 }, { rankIndex: 5, fileIndex: 5 }]
    },
    {
      currentPosition: { fileIndex: 6, rankIndex: 7 },
      expectedMoves: [{ rankIndex: 6, fileIndex: 7 }, { rankIndex: 7, fileIndex: 7 }]
    }].forEach(({ currentPosition, expectedMoves }) => {
      it(`should give possible moves for current position: ${ JSON.stringify(currentPosition)}`, () => {
        const possibleMoves = Chessboard.getPossibleMoves(PieceType.Pawn, currentPosition);
        expect(possibleMoves.sort(movesComparer)).toEqual(expectedMoves.sort(movesComparer));
      });
    });
  
    [{
      currentPosition: { fileIndex: 7, rankIndex: 7 },
    },
    {
      currentPosition: { fileIndex: 7, rankIndex: 0 },
    }].forEach(({ currentPosition }) => {
      it(`should give no moves when reached to an end: ${ JSON.stringify(currentPosition)}`, () => {
        const possibleMoves = Chessboard.getPossibleMoves(PieceType.Pawn, currentPosition);
        const expectedMoves = [];
        expect(possibleMoves).toEqual(expectedMoves);
      });
    })
  });
});