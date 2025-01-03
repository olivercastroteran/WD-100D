function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid;
  playerConfigModal.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigModal.style.display = 'none';
  backdrop.style.display = 'none';
  form.firstElementChild.classList.remove('error');
  configErrorMsg.textContent = '';
  form.firstElementChild.lastElementChild.value = '';
  // form.reset();
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    document.querySelector('.form-control').classList.add('error');
    configErrorMsg.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerData = document.getElementById(
    `player-${editedPlayer}-data`,
  );
  updatedPlayerData.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
