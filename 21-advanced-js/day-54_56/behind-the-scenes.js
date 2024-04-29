const hobbies = ['Sports', 'Cooking']; // A pointer to the array is stored
let age = 31; // The value itself is stored

hobbies.push('Reading');
// hobbies = ['Coding', 'Sleeping'] - Not allowed, new address is stored

console.log(hobbies);

// Primitive Types: numbers, strings, booleans, undefined, null, big int, symbol
// Reference Type: Objects

const person = { age: 31 };

function getAdultYears(p) {
  //p.age -= 18; // This mutates the person object
  //return p.age;
  return p.age - 18;
}

console.log(getAdultYears(person));
console.log(person);

// Spread operator in objects, pulls out all the ey value pairs and makes a clone of the object 1 level deep
console.log(getAdultYears({ ...person }));
