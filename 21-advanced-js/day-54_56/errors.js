const fs = require('fs');

function readFile() {
  let fileData;
  try {
    fileData = fs.readFileSync('data.json');
  } catch (error) {
    console.log('An error occurred!');
    console.log(error.message);
  }
  console.log(fileData);
  console.log('Hi there!');
}

readFile();
