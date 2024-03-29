const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let playerId = 0;
let activePlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const form = document.querySelector('form');
const errorMsg = document.querySelector('.config-errors');
const gameArea = document.querySelector('.active-game');
const activePlayerName = document.querySelector('.active-player');

const editPlayer1Btn = document.querySelector('.edit-player-1-btn');
const editPlayer2Btn = document.querySelector('.edit-player-2-btn');
const closeConfigBtn = document.querySelector('#close-config-btn');
const startGameBtn = document.querySelector('.start-btn');
const gameFields = document.querySelectorAll('.game-board li');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

closeConfigBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig);

startGameBtn.addEventListener('click', startNewGame);

gameFields.forEach((field) => {
  field.addEventListener('click', selectGameField);
});
