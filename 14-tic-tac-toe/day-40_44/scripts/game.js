function resetGame() {
  activePlayer = 0;
  round = 1;
  isGameOver = false;
  gameOverEl.firstElementChild.innerHTML =
    '<h2>You Won! <span class="winner">Player Name</span></h2>';
  gameOverEl.style.display = 'none';

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }

  gameFields.forEach((field) => {
    field.textContent = '';
    field.classList.remove('disabled');
  });
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set custom player names for both player!');
    return;
  }

  resetGame();

  activePlayerName.textContent = players[activePlayer].name;
  gameArea.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(e) {
  if (isGameOver) {
    return;
  }

  const col = e.target.dataset.col - 1;
  const row = e.target.dataset.row - 1;

  if (gameData[row][col] > 0) {
    alert('Please select an empty field!');
    return;
  }

  e.target.textContent = players[activePlayer].symbol;
  e.target.classList.add('disabled');

  gameData[row][col] = activePlayer + 1;
  // console.log(gameData);

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  round++;
  switchPlayer();
}

function checkForGameOver() {
  // Checking Rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // Checking Cols
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // Checking Diags
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[0][0] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[2][0] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (round === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  isGameOver = true;
  gameOverEl.style.display = 'block';

  if (winnerId > 0) {
    gameOverEl.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOverEl.firstElementChild.textContent = "It's a draw!";
  }
}
