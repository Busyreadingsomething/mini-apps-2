const generateEmptyField = (len) => {
  const board = [];
  for (let i = 0; i < len; i += 1) {
    const row = Array(len).fill('');
    const spacedRows = row.map(() => ({
      value: '',
      revealed: false,
    }));
    board.push(spacedRows);
  }
  return board;
};

const populateMines = (len) => {
  const board = generateEmptyField(len);
  let mineCount = len;
  while (mineCount) {
    const row = Math.floor(Math.random() * len);
    const col = Math.floor(Math.random() * len);

    if (!board[row][col].value) {
      board[row][col].value = 'X';
      mineCount -= 1;
    }
  }

  return board;
};

const countMines = (board, row, col) => {
  const endRow = row + 1;
  const endCol = col + 1;
  let count = 0;
  for (let rowIndex = row - 1; rowIndex <= endRow; rowIndex += 1) {
    for (let colIndex = col - 1; colIndex <= endCol; colIndex += 1) {
      if (row === rowIndex && col === colIndex) {
        continue;
      }
      if (board[rowIndex] && board[rowIndex][colIndex] && board[rowIndex][colIndex].value === 'X') {
        count += 1;
      }
    }
  }

  return count;
};

const setNumberSpace = (len) => {
  const board = populateMines(len);

  for (let row = 0; row < len; row += 1) {
    for (let col = 0; col < len; col += 1) {
      if (board[row][col] === 'X') {
        continue;
      }
      const mines = countMines(board, row, col);
      if (mines) {
        board[row][col].value = mines;
      }
    }
  }
};

const generateMineField = (len) => {
  const board = setNumberSpace(len);
  const safeSpaces = (len ** 2) - len;
  return {
    board,
    safeSpaces,
  };
};

export default setNumberSpace;
