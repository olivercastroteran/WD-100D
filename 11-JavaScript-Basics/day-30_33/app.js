let age = 32;
let userName = 'Oli';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
  title: 'Fullstack Developer',
  place: 'London',
  salary: 24000,
};

// console.log(hobbies[0]);
// console.log(job.salary);

// let adultYears = age - 18;
// console.log(adultYears);

// parameter
function calcAdultYears(userAge) {
  return userAge - 18;
}

// argument
console.log(calcAdultYears(age));

const person = {
  name: 'Oli', // property
  greet() {
    // method
    console.log('Hello!');
  },
};

person.greet();
