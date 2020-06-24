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

  getInitialCellCssClasses(fileIndex, rankIndex) {
    if (fileIndex % 2 === 0) {
      return rankIndex % 2 === 0 ? 'white' : 'black';
    }
    return rankIndex % 2 === 0 ? 'black' : 'white';
  }

  getCellClasses(fileIndex, rankIndex) {
    const initialCellClass = this.getInitialCellCssClasses(fileIndex, rankIndex)
    let classes = {
      cell: true,
      [initialCellClass]: true
    }
    console.log({fileIndex, rankIndex,initialCellClass});
    return classes;
  }
}
