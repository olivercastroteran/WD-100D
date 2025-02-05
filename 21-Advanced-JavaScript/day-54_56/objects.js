// const job = {
//   title: 'Developer',
//   location: 'New York',
//   salary: 50000,
// };

// console.log(new Date().toISOString());

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a a${this.title}, I work in ${this.location} and I earn $${this.salary}`,
    );
  }
}

const developer = new Job('Full Stack Engineer', 'London', 20000);
const chef = new Job('Chef', 'Cochabamba', 9000);

// console.log(developer, chef);
developer.describe();
chef.describe();

// Arrays and Objects Destructuring
const [firstName, lastName] = ['Oliver', 'Castro'];

const job = { title: 'Developer', location: 'London' };

const { title: jobTitle, location } = job;
