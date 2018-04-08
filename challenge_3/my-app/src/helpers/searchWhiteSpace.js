const revealAll = board => board
  .forEach(row => row
    .forEach((sq) => {
      sq.revealed = true;
    }));

const searchWhiteSpace = (board, initialRow, initialCol) => {
  let count = 0;
  let loss = false;

  const innerSearch = (row, col) => {
    if (!board[row] || !board[row][col]) {
      return undefined;
    } else if (!board[row][col].value && !board[row][col].revealed) {
      board[row][col].revealed = true;
      count += 1;
      for (let rowPos = -1; rowPos < 2; rowPos += 1) {
        for (let colPos = -1; colPos < 2; colPos += 1) {
          const newX = row + rowPos;
          const newY = col + colPos;
          innerSearch(newX, newY);
        }
      }
    } else if (board[row][col].value !== 'X' && !board[row][col].revealed) {
      board[row][col].revealed = true;
      count += 1;
    }

    return undefined;
  };

  if (board[initialRow][initialCol].value === 'X') {
    board[initialRow][initialCol].revealed = true;
    loss = true;
    revealAll(board);
  } else {
    innerSearch(initialRow, initialCol);
  }

  return {
    count,
    board,
    loss,
  };
};

export default searchWhiteSpace;
