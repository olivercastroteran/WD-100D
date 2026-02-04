const hobbies = ['coding', 'gaming', 'cooking']; // A pointer to an array in memory
const age = 32; // A primitive value itself is stored in memory

// When we assign a primitive value to another variable, it creates a copy of that value
let newAge = age; // newAge is now a copy of age
newAge = 33; // Changing newAge does not affect age

hobbies.push('traveling');

console.log(hobbies); // Output: ['coding', 'gaming', 'cooking', 'traveling']

// Primitive Values: numbers, strings, booleans, null, undefined
// Reference Values: objects, arrays, functions

const person = {
  name: 'Oli',
  age: 32,
  hobbies: ['coding', 'gaming', 'cooking'],
};

function getAdultYears(p) {
  p.age -= 18; // Modifying the age property of the person object
  return p.age;
}

console.log(getAdultYears(person)); // The address/pointer gets passed to the function, so the original object is modified
console.log(person); // The original person object is modified by the function
console.log(getAdultYears({ ...person })); // Using the spread operator to create a shallow copy of the person object, so the original object is not modified
