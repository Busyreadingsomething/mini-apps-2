import calculateWin from '../helpers/calculateWin';

describe('### CALCULATE WIN###', () => {
  const board = {
    count: 5,
    loss: false,
  };
  it('Should return an object', () => {
    const winningBoard = calculateWin(board, 5);
    expect(winningBoard).toBeInstanceOf(Object);
  });
  it('Should add property gameOver with true if safeSpaces is 0', () => {
    const winningBoard = calculateWin(board, 5);
    expect(winningBoard).toHaveProperty('gameOver', true);
  });
  it('Should add property gameOver with false if safeSpaces is not 0', () => {
    const regularBoard = calculateWin(board, 2);
    expect(regularBoard).toHaveProperty('gameOver', false);
  });
});
