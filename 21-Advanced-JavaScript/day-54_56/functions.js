function greetUser(greetingPrefix, userName = 'User') {
  console.log(`${greetingPrefix}, ${userName}!`);
}

// greetUser('Hi', 'Oli');

function sumUp(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

const inputNumbers = [1, 5, 10, 11, 15, 25, 31];

// console.log(sumUp(...inputNumbers));
// console.log(sumUp(1, 5, 10, 11));
