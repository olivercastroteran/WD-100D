function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  gameOver.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';

  gameOver.style.display = 'none';
  gameArea.style.display = 'none';

  const cells = document.querySelectorAll('#game-board li');
  for (const cell of cells) {
    cell.textContent = '';
    cell.classList.remove('disabled');
  }
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set custom player names for both players!');
    return;
  }

  resetGame();

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = 'block';
}

function checkWinner() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] > 0 &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      return board[i][0];
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] > 0 &&
      board[0][j] === board[1][j] &&
      board[1][j] === board[2][j]
    ) {
      return board[0][j];
    }
  }

  // Check diagonals
  if (
    board[0][0] > 0 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }

  if (
    board[0][2] > 0 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  // No winner
  return 0;
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayerName.textContent = players[activePlayer].name;
}

function selectCell(e) {
  if (isGameOver) {
    return;
  }

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

  const winnerId = checkWinner();

  if (winnerId !== 0) {
    endGame(winnerId);
    return;
  }

  currentRound++;
  switchPlayer();
}

function endGame(winnerId) {
  isGameOver = true;
  gameOver.style.display = 'block';
  if (winnerId === -1) {
    gameOver.firstElementChild.textContent = "It's a draw!";
  } else {
    gameOver.firstElementChild.textContent = `${players[winnerId - 1].name} wins!`;
  }
}
