const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/current-time', (req, res) => {
  const currentTime = new Date().toISOString();
  res.send(`<h1>Current Time: ${currentTime}</h1>`);
});

app.get('/', (req, res) => {
  res.send(`<form action="/store-user" method="POST">
              <label for="username">Your Name:</label>
              <input type="text" id="username" name="username" placeholder="Enter your name">
              <button type="submit">Submit</button>
            </form>`);
});

app.post('/store-user', (req, res) => {
  const userName = req.body.username;
  // Read the existing users from the JSON file
  const filePath = path.join(__dirname, 'data', 'users.json');

  const fileData = fs.readFileSync(filePath);

  const users = JSON.parse(fileData);

  // Add the new username to the array
  users.push(userName);

  // Write the updated array back to the JSON file
  fs.writeFileSync(filePath, JSON.stringify(users));

  res.send(`<h1>Username stored: ${userName}</h1>`);
});

app.listen(3000);
