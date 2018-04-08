import genField from '../../helpers/generateMineField';
import actionTypes from '../actionTypes/actionTypes';

export const createNewBoard = (len = 10) => {
  const { board, safeSpaces } = genField.generateMineField(len);
  return {
    type: actionTypes.CREATE_BOARD,
    board,
    safeSpaces,
  };
};

export const revealSpace = (row, col) => ({
  type: actionTypes.REVEAL_SPACE,
  row,
  col,
});
