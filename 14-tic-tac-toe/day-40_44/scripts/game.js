function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set custom player names for both player!');
    return;
  }

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

  switchPlayer();
}
