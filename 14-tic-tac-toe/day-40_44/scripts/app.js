// DOM Elements
const playerConfigModal = document.getElementById('config-overlay');
const backdrop = document.querySelector('.backdrop');
const form = document.querySelector('form');
const configErrorMsg = document.getElementById('config-error');
const activePlayerName = document.getElementById('current-player');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelBtn = document.getElementById('cancel-btn');

const startGameBtn = document.getElementById('start-game-btn');
const gameArea = document.getElementById('active-game');
const cells = document.querySelectorAll('#game-board li');
const gameOver = document.getElementById('game-over');

// Variables
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;

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

// Event Listeners
editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig);

cells.forEach((cell) => {
  cell.addEventListener('click', selectCell);
});

startGameBtn.addEventListener('click', startNewGame);
