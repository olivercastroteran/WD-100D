const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/currenttime', function (req, res) {
  res.send(`<h1>${new Date().toISOString()}</h1>`);
}); // localhost:3000/currenttime

app.get('/', function (req, res) {
  res.send(
    `<form action="store-user" method="POST">
      <label>Your Name</label>
      <input type="text" name="username"/>
      <button>Submit</button>
    </form>`
  );
}); // localhost:3000/

app.post('/store-user', function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, 'data', 'users.json');

  const fileData = fs.readFileSync(filePath);
  const existingUser = JSON.parse(fileData);

  existingUser.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUser));

  res.send('<h1>Username stored!</h1>');
});

app.get('/users', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'users.json');

  const fileData = fs.readFileSync(filePath);
  const existingUser = JSON.parse(fileData);

  let resData = `<ul>`;

  for (const user of existingUser) {
    resData += `<li>${user}</li>`;
  }

  resData += '</ul>';

  res.send(resData);
});

app.listen(3000);
