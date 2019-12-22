import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cell extends Component {
  getInitialCellCssClasses() {
    const { fileIndex, rankIndex } = this.props;
    if (fileIndex % 2 === 0) {
      return rankIndex % 2 === 0 ? 'white' : 'black';
    }
    return rankIndex % 2 === 0 ? 'black' : 'white';
  }

  getSelectedCellCssClasses = () => {
    const {
      selectedPosition, fileIndex, rankIndex,
    } = this.props;
    if (selectedPosition.fileIndex === fileIndex
      && selectedPosition.rankIndex === rankIndex) {
      return 'cell__selected';
    }
    return '';
  }

  getCellAdditionalCssClasses = () => {
    const initialCellClass = this.getInitialCellCssClasses();
    const selectedCellClass = this.getSelectedCellCssClasses();
    const { highlight } = this.props;
    const highlightCellClass = highlight ? '-highlight' : '';
    return `${selectedCellClass} ${initialCellClass} ${highlightCellClass}`;
  }


  render() {
    const {
      rankTitle, fileTitle, fileIndex, rankIndex, onCellMouseEnter,
      onCellMouseLeave, onCellSelect,
    } = this.props;
    return (
      <div
        role="link"
        className={`cell ${this.getCellAdditionalCssClasses()}`}
        onMouseEnter={() => onCellMouseEnter({fileIndex, rankIndex})}
        onMouseLeave={() => onCellMouseLeave(fileIndex, rankIndex)}
        onClick={() => onCellSelect({fileIndex, rankIndex})}
        tabIndex={0}
      >
        {`${`${rankTitle}${fileTitle}`}`}
      </div>
    );
  }
}

Cell.propTypes = {
  fileIndex: PropTypes.number.isRequired,
  rankIndex: PropTypes.number.isRequired,
  fileTitle: PropTypes.string.isRequired,
  rankTitle: PropTypes.string.isRequired,
  onCellMouseEnter: PropTypes.func.isRequired,
  onCellMouseLeave: PropTypes.func.isRequired,
  onCellSelect: PropTypes.func.isRequired,
  selectedPosition: PropTypes.object.isRequired,
  highlight: PropTypes.bool.isRequired,
};
