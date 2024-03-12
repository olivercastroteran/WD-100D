const myName = 'Oli';

if (myName === 'Oli') {
  console.log('Hello!');
}

const isLoggedIn = true;

if (isLoggedIn) {
  console.log('User is logged in!');
} else if (!isLoggedIn) {
  console.log('User is NOT logged in!');
}

const enteredInput = 'test'; // '' & 0 => false

if (enteredInput) {
  console.log('Input is valid!');
}
