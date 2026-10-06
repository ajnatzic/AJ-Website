import React from 'react';
import ReactDOM from 'react-dom';
import LifeStats from './lifestats';
import TicTacToe from './tictactoe';

ReactDOM.render(
  <React.StrictMode>
    <LifeStats />
    <TicTacToe />
  </React.StrictMode>,
  document.getElementById('root')
);