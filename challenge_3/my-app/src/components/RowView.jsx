import React from 'react';
import SquareContainer from './containers/SquareContainer';

const RowView = ({ row, rowIndex }) => (
  <div className="row">
    {
      row.map((square, colIndex) => (
        <SquareContainer row={rowIndex} col={colIndex} id={square} />
      ))
    }
  </div>
);

export default RowView;
