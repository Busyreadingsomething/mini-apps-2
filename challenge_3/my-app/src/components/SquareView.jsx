import React from 'react';

const SquareView = ({ id, row, col, selectSquare }) => {
  const style = {};

  if (id.revealed) {
    style.backgroundColor = 'white';
  } else {
    style.backgroundColor = 'grey';
  }

  return (
    <div
      className="square"
      id={`square${id.value}`}
      row={row}
      col={col}
      onClick={e => selectSquare(e)}
      style={style}>
      {
        id.revealed ? id.value : null
      }
    </div>
  )
};

export default SquareView;
