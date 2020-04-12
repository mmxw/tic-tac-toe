
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

  const winningConditions = [
    [0, 1, 2],
    [0, 4, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
  ];

  function isFullBoard() {
    const filledSquares = squares.filter(square => square !== null);
    return filledSquares.length === 9 ? true : false
  }

  
  function findWinner() {
    for (let i=0; i<winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) {
        return `${squares[a]} has won!`
      }
  }
  if (isFullBoard()) return `it is a draw`;
}

function handleReset () {
  window.location.reload()
}
 
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
          <h3>Next Move: { isXNext ? 'X' : 'O' } </h3>  
        </div>
        <div className="next-move">
          {findWinner()} 
        </div>
        <div>
          <button className="next-move" type="reset" onClick={handleReset}>
            <h3> Play Again! </h3>
          </button>
        </div>
      </div>



    </div>
  )
  
}

export default App; 


