const generateEmptyField = (len) => {
  const board = [];
  for (let i = 0; i < len; i += 1) {
    const row = Array(10).fill('');
    board.push(row);
  }
  console.log(JSON.stringify(board));
  return board;
};
