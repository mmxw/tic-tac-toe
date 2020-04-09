
import React, {useState, useEffect} from 'react';
import SquareInPlay from './SquareInPlay';
import './App.css';


function App() {

  
  return (
    <div className="container">
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
          <div className="board-row">
            {SquareInPlay(0)}
            {SquareInPlay(1)}
            {SquareInPlay(2)}
          </div>
          <div className="board-row">
            {SquareInPlay(3)}
            {SquareInPlay(4)}
            {SquareInPlay(5)}
          </div>
          <div className="board-row">
            {SquareInPlay(6)}
            {SquareInPlay(7)}
            {SquareInPlay(8)}
          </div>

        </div>
        <div className="next-move">
          <h3>Next Move: {} </h3>  
        </div>
        <div>
          <button className="next-move" type="reset">
            <h3> Play Again! </h3>
          </button>
        </div>
      </div>



    </div>
  )
  
}

export default App; 


