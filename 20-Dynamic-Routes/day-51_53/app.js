const fs = require('fs');
const path = require('path');

const express = require('express');
const uuid = require('uuid');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/confirm', (req, res) => {
  res.render('confirm');
});

app.get('/recommend', (req, res) => {
  res.render('recommend');
});

app.post('/recommend', (req, res) => {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const restaurants = JSON.parse(fileData);

  restaurants.push(restaurant);
  fs.writeFileSync(filePath, JSON.stringify(restaurants));

  res.redirect('/confirm');
});

app.get('/restaurants', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const restaurants = JSON.parse(fileData);

  res.render('restaurants', { restaurants });
});

app.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const restaurants = JSON.parse(fileData);

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).render('404');
  }

  res.render('restaurant-detail', { restaurant });
});

app.listen(3000);
