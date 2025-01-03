// DOM Elements
const playerConfigModal = document.getElementById('config-overlay');
const backdrop = document.querySelector('.backdrop');
const form = document.querySelector('form');
const configErrorMsg = document.getElementById('config-error');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Variables
let editedPlayer = 0;

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
