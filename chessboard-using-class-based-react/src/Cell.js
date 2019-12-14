import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cell extends Component {
  getAdditionalCssClasses() {
    const { fileIndex, rankIndex } = this.props;
    if (fileIndex % 2 === 0) {
      return rankIndex % 2 === 0 ? 'white' : 'black';
    }
    return rankIndex % 2 === 0 ? 'black' : 'white';
  }

  render() {
    const { rankTitle, fileTitle, fileIndex, rankIndex } = this.props;
    return (
      <div className={`cell ${this.getAdditionalCssClasses()}`}
        onMouseEnter={() => this.props.onCellMouseEnter(fileIndex, rankIndex)}
        onMouseLeave={() => this.props.onCellMouseLeave(fileIndex, rankIndex)}
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
};
