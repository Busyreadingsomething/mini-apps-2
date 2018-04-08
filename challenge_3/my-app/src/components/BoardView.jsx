import React from 'react';
import RowView from './RowView';

const BoardView = ({ board }) => (
  <div className="board-container">
    {
      board.map((row, rowIndex) => (
        <RowView row={row} rowIndex={rowIndex} />
      ))
    }
  </div>
);

export default BoardView;
