let age = 32;
let username = 'Oliver';
let hobbies = ['Sports', 'Reading', 'Coding'];

let job = {
  title: 'Fullstack Developer',
  salary: 50000,
  place: 'New York',
};

let adultYears;

function calcAdultYear(userAge) {
  return userAge - 18;
}

adultYears = calcAdultYear(42);

console.log(hobbies[1]);
console.log(job.salary);
