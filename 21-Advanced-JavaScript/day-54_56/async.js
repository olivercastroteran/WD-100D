const fs = require('fs/promises');

function readFile() {
  // fs.readFile('data.txt', (error, fileData) => {
  // if (error){
  //   ///
  // }
  //   console.log(fileData.toString());
  // });

  fs.readFile('data.txt')
    .then(function (fileData) {
      console.log(fileData.toString());
    })
    .then(function () {
      console.log('Next Async operation');
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log('Hi there!');
}

async function readFileAsync() {
  try {
    const fileData = await fs.readFile('data.txt');
    console.log(fileData.toString());
  } catch (error) {
    console.log(error);
  }
  console.log('Hi there!');
}

readFile();
