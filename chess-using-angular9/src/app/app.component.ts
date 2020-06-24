import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chess-using-angular9';
  selectedPiece:any;
  receiveMessage($event) {
    this.selectedPiece = $event
    console.log({"selectedPiece": this.selectedPiece});
  }
}
