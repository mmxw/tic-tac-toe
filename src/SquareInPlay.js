import React from "react";

function SquareInPlay({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default SquareInPlay;
