import React, { Component } from 'react';
import './App.css';
import PiecesList from './PiecesList';
import ChessboardView from './ChessboardView';

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <PiecesList />
        <ChessboardView />
      </div>
    );
  }
}
