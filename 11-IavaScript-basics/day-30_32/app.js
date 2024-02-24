let age = 32;
let username = 'Oliver';
let hobbies = ['Sports', 'Reading', 'Coding'];

let job = {
  title: 'Fullstack Developer',
  place: 'New York',
  salary: 50000,
};

let adultYears;

function calcAdultYear(userAge) {
  return userAge - 18;
}

adultYears = calcAdultYear(42);

console.log(hobbies[1]);
console.log(job.salary);

let person = {
  // Property
  name: 'Oli',
  // Method
  greet() {
    // alert('Hello!');
    console.log('Hello!');
  },
};

person.greet();
