import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
  fileTitles: any; // TODO: TS Technical debt 
  rankTitles: any; // TODO: TS Technical debt 
  @Input() selectedPosition: any; // TODO: TS Debt 
  @Input() predictedMoves: any;
  
  @Output() messageEvent = new EventEmitter<object>();

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

  getSelectedCellCssClasses = (selectedFileIndex, selectedRankIndex) => {
    const {fileIndex, rankIndex} = this.selectedPosition;
    if (selectedFileIndex === fileIndex
      && selectedRankIndex === rankIndex) {
      return 'cell__selected';
    }
    return '';
  }

  getCellClasses(fileIndex, rankIndex) {
    const initialCellClass = this.getInitialCellCssClasses(fileIndex, rankIndex);
    const selectedClass = this.getSelectedCellCssClasses(fileIndex, rankIndex);
    const highlight = this.shouldHighlightCell(fileIndex, rankIndex)
    const highlightCellClass = highlight ? 'highlight' : '';
    console.log({selectedClass,highlight, highlightCellClass, predictedMoves: this.predictedMoves});
    let classes = {
      cell: true,
      [initialCellClass]: true,
      [selectedClass]: true,
      [highlightCellClass]: true,
    }
    return classes;
  }

  shouldHighlightCell = (fileIndex, rankIndex) => {
    return this.predictedMoves.some((x) => x.fileIndex === fileIndex && x.rankIndex === rankIndex);
  };

  onCellSelected(fileIndex, rankIndex) {
    this.messageEvent.emit({fileIndex, rankIndex})
  }
}
