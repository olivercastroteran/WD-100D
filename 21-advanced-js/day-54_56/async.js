const { error } = require('console');
const fs = require('fs/promises');

async function readFile() {
  // fs.readFile('data.txt', function (error, fileData) {
  //   console.log('File parsing done!');
  //   console.log(fileData.toString());
  //   // Start another async task that sends the data to a database
  // });

  // fs.readFile('data.txt')
  //   .then(function (fileData) {
  //     console.log('File parsing done!');
  //     console.log(fileData.toString());
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  try {
    const fileData = await fs.readFile('data.txt');
    console.log('File parsing done!');
    console.log(fileData.toString());
  } catch (error) {
    console.log(error.message);
  }

  console.log('Hi there!');
}

readFile();
