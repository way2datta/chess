import { Component } from '@angular/core';
import Chessboard from "./../lib/Chessboard";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chess-using-angular9';
  selectedPiece:any;
  selectedPosition:any = {};
  predictedMoves: any= [];
  
  onPieceSelected($event) {
    this.selectedPiece = $event
    console.log({"selectedPiece": this.selectedPiece});
  }

  onCellSelected = (selectedPosition) => {
    this.selectedPosition = selectedPosition;
    const {name} = this.selectedPiece;
    const predictedMoves = Chessboard.getPossibleMoves(name, this.selectedPosition);
    this.predictedMoves = predictedMoves;
    console.log({selectedPosition, predictedMoves, name});
  }
}
