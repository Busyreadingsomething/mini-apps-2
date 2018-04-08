import genField from '../helpers/generateMineField';

describe('### TESTING GENFIELD ###', () => {
  describe('___SQUARE CLASS__', () => {
    it('Should be an instance of Square', () => {
      const square = new genField.Square();
      expect(square).toBeInstanceOf(genField.Square);
    });
    it('Should have the properties value and revealed', () => {
      const square = new genField.Square();
      expect(square).toHaveProperty('value', '');
      expect(square).toHaveProperty('revealed', false);
    });
  });

  describe('___EMPTY FIELD___', () => {
    it('Should create an array containing arrays', () => {
      const board = genField.generateEmptyField(3);
      expect(board).toBeInstanceOf(Array);
      expect(board).toEqual(expect.arrayContaining([]));
      expect(board.length).toBe(3);
    });
    it('Should have nested arrays containing Squares', () => {
      const board = genField.generateEmptyField(3);
      expect(board[0]).toBeInstanceOf(Array);
      expect(board[0]).toEqual(expect.arrayContaining([new genField.Square()]));
      expect(board[0].length).toBe(3);
    });
  });

  describe('___POPULATE MINES___', () => {
    it('Should add mines to the board', () => {
      const len = 3;
      const board = genField.populateMines(len);
      const mineCount = board.reduce((acc, row) => {
        const count = acc + row.reduce((tot, sq) => {
          let mines = tot;
          if (sq.value === 'X') {
            mines += 1;
          }
          return mines;
        }, 0);
        return count;
      }, 0);
      const expectedMines = len + Math.floor(len / 3);
      expect(mineCount).toBe(expectedMines);
    });
  });

  describe('___COUNT MINES___', () => {
    it('Should count the mines around a single square', () => {
      const len = 3;
      const max = len + Math.floor(len / 3);
      const board = genField.populateMines(len);
      const mineCount = genField.countMines(board, 1, 1);
      expect(mineCount).toBeLessThanOrEqual(max);
    });
  });

  describe('___SET NUMBERS___', () => {
    it('Should add numbers to the field', () => {
      const len = 3;
      const board = genField.setNumberSpace(len);
      const hasNumbers = board
        .some(row => row
          .some(sq => (typeof sq.value === 'number')));
      expect(hasNumbers).toBe(true);
    });
  });

  describe('___GENERATE MINE FIELD___', () => {
    const len = 3;
    const mineField = genField.generateMineField(len);

    it('Should return an object', () => {
      expect(mineField).toBeInstanceOf(Object);
    });
    it('Should have the properties loss, gameOver, board, and safeSpaces', () => {
      expect(mineField).toHaveProperty('loss', false);
      expect(mineField).toHaveProperty('gameOver', false);
      expect(mineField).toHaveProperty('board');
      expect(mineField).toHaveProperty('safeSpaces');
    });
  });
});
