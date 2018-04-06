import React from 'react';
import SquareView from './SquareView';

const BoardRowView = props => (
  <div className="board-row">
    <SquareView id={"X"} />
    <SquareView id={3} />
    <SquareView id={"O"} />
  </div>
);

export default BoardRowView;
