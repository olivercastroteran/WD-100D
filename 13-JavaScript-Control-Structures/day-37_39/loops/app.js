// Sum Numbers

const calculateSumBtn = document.querySelector('#calculator button');
const userNumberInput = document.querySelector('#user-number');
const calculatedSumOutput = document.querySelector('#calculated-sum');

function calculateSum() {
  const userNumber = +userNumberInput.value;
  let sumUpToUserNumber = 0;

  for (let i = 0; i <= userNumber; i++) {
    sumUpToUserNumber += i;
  }

  calculatedSumOutput.textContent = sumUpToUserNumber;
  calculatedSumOutput.style.display = 'block';
}

calculateSumBtn.addEventListener('click', calculateSum);

// Highlight Links

const highlightLinksBtn = document.querySelector('#highlight-links button');
const links = document.querySelectorAll('#highlight-links a');

function highlightLinks() {
  for (const link of links) {
    link.classList.add('highlight');
  }
}

highlightLinksBtn.addEventListener('click', highlightLinks);

// Display User Data

const displayUserDataBtn = document.querySelector('#user-data button');
const userDataList = document.querySelector('#user-data ul');

const dummyUserData = {
  firstName: 'Oliver',
  lastName: 'Castro',
  age: 32,
};

function displayUserData() {
  userDataList.innerHTML = '';

  for (const key in dummyUserData) {
    const newListItem = document.createElement('li');
    const capitalizedKey =
      key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
    newListItem.textContent = `${capitalizedKey}: ${dummyUserData[key]}`;
    userDataList.appendChild(newListItem);
  }
}

displayUserDataBtn.addEventListener('click', displayUserData);

// Roll Dice

const rollDiceBtn = document.querySelector('#statistics button');
const diceRollsList = document.querySelector('#statistics ul');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
  const targetNumber = +document.querySelector('#user-target-number').value;
  diceRollsList.innerHTML = '';
  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    numberOfRolls++;

    if (rolledNumber === targetNumber) {
      hasRolledTargetNumber = true;
    }
  }

  const newListItem = document.createElement('li');
  newListItem.textContent = `You had to roll the dice ${numberOfRolls} times to get the number ${targetNumber}.`;
  diceRollsList.appendChild(newListItem);
}

rollDiceBtn.addEventListener('click', deriveNumberOfDiceRolls);
