function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // + converts string to number
  playerConfigModal.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigModal.style.display = 'none';
  backdrop.style.display = 'none';
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayerName = formData.get('playername').trim();

  if (!enteredPlayerName) {
    alert('Please enter a valid name!');
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`,
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
