import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-piece',
  templateUrl: './select-piece.component.html',
  styleUrls: ['./select-piece.component.scss']
})
export class SelectPieceComponent implements OnInit {
  constructor() { }
  pieces: any; // TODO: TS Debt 
  selectedPiece: any; // TODO: TS Debt 
  ngOnInit(): void {
    this.pieces = getPieces();
  }
  onSelect(piece): void {
    this.selectedPiece = piece;
    console.log(piece);
  }
}


export function getPieces() {
  return [
    { name: 'King' },
    { name: 'Queen' },
    { name: 'Bishop' },
    { name: 'Horse' },
    { name: 'Rook' },
    { name: 'Pawn' },
  ];
}
