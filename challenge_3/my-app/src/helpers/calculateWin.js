const calculateWin = (board, safeSpaces) => {
  const { count, loss } = board;

  if (safeSpaces - count === 0 || loss) {
    board.gameOver = true;
  } else {
    board.gameOver = false;
  }

  return board;
};

export default calculateWin;
