function greetUser(name = 'user') {
  console.log(`Hi ${name}!`);
}

// greetUser('Oli');
// greetUser();

function sumUp(...numbers) {
  // rest operator
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

// console.log(sumUp(1, 5, 10, 11, 20, 31));
// console.log(sumUp(...inputNumbers)); // spread operator
