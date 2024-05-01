// const job = {
//   title: 'Developer',
//   location: 'New York',
//   salary: 5000,
// };

class Job {
  constructor(title, place, salary) {
    this.title = title;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn $${this.salary}. `
    );
  }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);

console.log(developer, cook);

developer.describe();

const [firstName, lastName] = ['Oliver', 'Castro'];

const { title: jobTitle, location, salary } = developer;
