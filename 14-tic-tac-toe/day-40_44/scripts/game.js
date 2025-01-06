function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set custom player names for both players!');
    return;
  }

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = 'block';
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayerName.textContent = players[activePlayer].name;
}

function selectCell(e) {
  const cell = e.target;

  const selectedCol = cell.dataset.col - 1;
  const selectedRow = cell.dataset.row - 1;

  if (board[selectedRow][selectedCol] > 0) {
    alert('Please select an empty cell!');
    return;
  }

  cell.textContent = players[activePlayer].symbol;
  cell.classList.add('disabled');

  board[selectedRow][selectedCol] = activePlayer + 1;
  // console.log(board);

  switchPlayer();
}
