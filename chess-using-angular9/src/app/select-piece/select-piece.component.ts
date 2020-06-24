import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import PieceType from "./../../lib/PieceType";

@Component({
  selector: 'app-select-piece',
  templateUrl: './select-piece.component.html',
  styleUrls: ['./select-piece.component.scss']
})
export class SelectPieceComponent implements OnInit {
  constructor() { }
  pieces: any; // TODO: TS Debt 
  @Input() selectedPiece: any; // TODO: TS Debt 
  @Output() messageEvent = new EventEmitter<object>();

  ngOnInit(): void {
    this.pieces = getPieces();
  }
  onSelect(piece): void {
    this.onPieceSelected(piece);
  }

  onPieceSelected(selectedPiece) {
    this.messageEvent.emit(selectedPiece)
  }
}

export function getPieces() {
  return [
    { name: PieceType.King },
    { name: PieceType.Queen },
    { name: PieceType.Bishop },
    { name: PieceType.Horse },
    { name: PieceType.Rook },
    { name: PieceType.Pawn },
  ];
}
