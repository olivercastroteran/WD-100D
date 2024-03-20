function openPlayerConfig(e) {
  playerId = +e.target.dataset.playerid;
  playerConfigOverlay.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  form.firstElementChild.classList.remove('error');
  errorMsg.textContent = '';
  form.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const playerName = formData.get('playername').trim();

  if (!playerName) {
    e.target.firstElementChild.classList.add('error');
    errorMsg.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerData = document.getElementById(`player-${playerId}-data`);
  updatedPlayerData.children[1].textContent = playerName;

  players[playerId - 1].name = playerName;

  closePlayerConfig();
}
