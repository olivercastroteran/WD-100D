// First Example: Sum Numbers

const calcSumBtn = document.querySelector('#calculator button');
const userNumberInput = document.querySelector('#user-number');
const resultSum = document.querySelector('#calculated-sum');

function calcSum() {
  const number = userNumberInput.value;
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    sum += i;
  }

  resultSum.textContent = sum;
  resultSum.style.display = 'block';
}

calcSumBtn.addEventListener('click', calcSum);

// Highlight Links

const highlightBtn = document.querySelector('#highlight-links button');
const links = document.querySelectorAll('#highlight-links a');

function highlightLinks() {
  for (const link of links) {
    link.classList.add('highlight');
  }
}

highlightBtn.addEventListener('click', highlightLinks);

// Loop Objects

const userData = {
  name: 'Oli',
  lastName: 'CT',
  age: 31,
};

const showUserDataBtn = document.querySelector('#user-data button');
const outputUserData = document.querySelector('#output-user-data');

function showUserData() {
  outputUserData.innerHTML = '';

  for (const key in userData) {
    const userDataItemElm = document.createElement('li');
    const txt = key.toUpperCase() + ': ' + userData[key];
    userDataItemElm.textContent = txt;

    outputUserData.append(userDataItemElm);
  }
}

showUserDataBtn.addEventListener('click', showUserData);

// Statistics / Roll the dice

const rollDiceBtn = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function numberOfDiceRolls() {
  const targetNumber = document.getElementById('user-target-number');
  const diceRollsList = document.getElementById('dice-rolls');

  const enteredNumber = +targetNumber.value;
  diceRollsList.innerHTML = '';

  let hasRolledTargetNum = false;
  let numOfRolls = 0;

  while (!hasRolledTargetNum) {
    const rolledNum = rollDice();
    // if (rolledNum === enteredNumber) {
    //   hasRolledTargetNum = true;
    // }
    numOfRolls++;

    const newRollLI = document.createElement('li');
    newRollLI.textContent = `Roll ${numOfRolls}: ${rolledNum}`;

    diceRollsList.append(newRollLI);

    hasRolledTargetNum = rolledNum === enteredNumber;
  }

  const totalRollsEl = document.getElementById('output-total-rolls');
  const outputTargetNum = document.getElementById('output-target-number');

  totalRollsEl.textContent = numOfRolls;
  outputTargetNum.textContent = enteredNumber;
}

rollDiceBtn.addEventListener('click', numberOfDiceRolls);
