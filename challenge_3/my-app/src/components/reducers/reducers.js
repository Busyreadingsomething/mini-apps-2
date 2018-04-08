import _ from 'lodash';
import actionTypes from '../actionTypes/actionTypes';
import genField from '../../helpers/generateMineField';
import searchWhiteSpace from '../../helpers/searchWhiteSpace';
import calculateWin from '../../helpers/calculateWin';

const initialState = genField.generateMineField(10);

const mineSweeperApp = (state = initialState, { type, row, col }) => {
  if (type === actionTypes.CREATE_BOARD) {
    return genField.generateMineField();
  } else if (state.gameOver) {
    return state;
  } else if (type === actionTypes.REVEAL_SPACE) {
    const clonedState = _.cloneDeep(state);
    const traversedBoard = searchWhiteSpace(clonedState.board, row, col);
    const {
      board,
      count,
      loss,
      gameOver,
    } = calculateWin(traversedBoard, state.safeSpaces);
    return {
      board,
      loss,
      gameOver,
      safeSpaces: clonedState.safeSpaces - count,
    };
  }
  return state;
};

export default mineSweeperApp;
