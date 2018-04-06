import actionTypes from '../actionTypes/actionTypes';
import generateMineField from '../../helpers/generateMineField';

const initialState = generateMineField(10);

const mineSweeperApp = (state = initialState, action) => {
  let { board, safeSpaces } = Object.assign({}, state);

  switch (action.type) {
    case actionTypes.CREATE_BOARD:
      return generateMineField();
    case actionTypes.REVEAL_SPACE:
      board[action.row][action.col].revealed = true;
      safeSpaces -= 1;
      return {
        board,
        safeSpaces,
      };
    default:
      return state;
  }
};

export default mineSweeperApp;
