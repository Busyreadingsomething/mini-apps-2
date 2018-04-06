const generateEmptyField = (len) => {
  const board = [];
  for (let i = 0; i < len; i += 1) {
    const row = Array(10).fill('');
    board.push(row);
  }
  console.log(JSON.stringify(board));
  return board;
};

const populateMines = (len) => {
  const board = generateEmptyField(len);
  let mineCount = len;

  while (mineCount) {
    const row = Math.floor(Math.random() * len);
    const col = Math.floor(Math.random() * len);

    if (!board[row][col]) {
      board[row][col] = 'X';
      mineCount -= 1;
    }
  }

  return board;
};
