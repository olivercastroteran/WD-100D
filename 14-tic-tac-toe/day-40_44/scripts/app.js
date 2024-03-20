const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');

const editPlayer1Btn = document.querySelector('.edit-player-1-btn');
const editPlayer2Btn = document.querySelector('.edit-player-2-btn');
const closeConfigBtn = document.querySelector('#close-config-btn');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

closeConfigBtn.addEventListener('click', closePlayerConfig);
backdrop.addEventListener('click', closePlayerConfig);
