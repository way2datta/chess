import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chess-using-angular9';
  selectedPiece:any;
  selectedPosition:any = {};

  onPieceSelected($event) {
    this.selectedPiece = $event
    console.log({"selectedPiece": this.selectedPiece});
  }

  onCellSelected = (selectedPosition) => {
    this.selectedPosition = selectedPosition;
    console.log({selectedPosition})
  }
}
