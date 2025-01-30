const express = require('express');

const uuid = require('uuid');

const { getRestaurants, storeRestaurants } = require('../util/restaurant-data');

const router = express.Router();

router.get('/confirm', (req, res) => {
  res.render('confirm');
});

router.get('/recommend', (req, res) => {
  res.render('recommend');
});

router.post('/recommend', (req, res) => {
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = getRestaurants();

  restaurants.push(restaurant);
  storeRestaurants(restaurants);

  res.redirect('/confirm');
});

router.get('/restaurants', (req, res) => {
  let order = req.query.order;
  let nextOrder = 'desc';

  if (order !== 'asc' && order !== 'desc') {
    order = 'asc';
  }

  if (order === 'desc') {
    nextOrder = 'asc';
  }

  const restaurants = getRestaurants();

  restaurants.sort((a, b) => {
    if (
      (order === 'asc' && a.name > b.name) ||
      (order === 'desc' && a.name < b.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render('restaurants', { restaurants, nextOrder: nextOrder });
});

router.get('/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;
  const restaurants = getRestaurants();

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return res.status(404).render('404');
  }

  res.render('restaurant-detail', { restaurant });
});

module.exports = router;
