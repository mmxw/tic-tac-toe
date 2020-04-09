import React, {useState} from 'react';
import Square from "./Square";

function SquareInPlay(i) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);  

  const handleClick = () => {
    const nextMove = squares.slice();
    nextMove[i] = isXNext ? 'X' : 'O';
    setSquares(nextMove);
    setIsXNext(!isXNext);
  }
  return (   
    <Square 
      value={squares[i]}
      onClick={handleClick}    
    />
  
  )
}

export default SquareInPlay;