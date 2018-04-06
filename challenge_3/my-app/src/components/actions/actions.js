import generateMineField from '../../helpers/generateMineField';
import { CREATE_BOARD, REVEAL_SPACE } from '../actionTypes/actionTypes';

export const createNewBoard = (len = 10) => {
  const { board, safeSpaces } = generateMineField(len);
  return {
    type: CREATE_BOARD,
    board,
    safeSpaces,
  };
};

export const revealSpace = (row, col) => ({
  type: REVEAL_SPACE,
  row,
  col,
});
