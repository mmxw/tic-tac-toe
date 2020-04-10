
import React, {useState, useEffect} from 'react';
import SquareInPlay from './SquareInPlay';
import './App.css';


function App() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);  

  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  return (
    
    <div className="container">
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <div className="game-board">
          {rows.map((row, index) => (
            <div key={index}>
              {row.map((cell, ind) => (
                <SquareInPlay
                  key={ind} 
                  value={squares[cell]}
                  onClick={
                    () => {
                      const nextMove = squares.slice();
                      nextMove[cell] = isXNext ? 'X' : 'O';
                      setSquares(nextMove);
                      setIsXNext(!isXNext);
                  }}
                />
              ))}
            </div>         
          ))}

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


