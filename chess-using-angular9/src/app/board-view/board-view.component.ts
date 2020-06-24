import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
  fileTitles: any; // TODO: TS Technical debt 
  rankTitles: any; // TODO: TS Technical debt 

  constructor() { }

  ngOnInit(): void {
    this.rankTitles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    this.fileTitles = ['1', '2', '3', '4', '5', '6', '7', '8'];
  }

}
