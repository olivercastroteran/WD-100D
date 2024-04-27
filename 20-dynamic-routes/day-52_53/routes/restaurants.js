const express = require('express');

const uuid = require('uuid');

const {
  getStoredRestaurant,
  storeRestaurants,
} = require('../util/restaurant-data');

const router = express.Router();

router.get('/confirm', function (req, res) {
  res.render('confirm');
});

router.get('/recommend', function (req, res) {
  res.render('recommend');
});

router.post('/recommend', function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();

  const storedRestaurants = getStoredRestaurant();

  storedRestaurants.push(restaurant);

  storeRestaurants(storedRestaurants);

  res.redirect('/confirm');
});

router.get('/restaurants', function (req, res) {
  let order = req.query.order;
  let nextOrder = 'desc';

  if (order !== 'asc' && order !== 'desc') {
    order = 'asc';
  }

  if (order === 'desc') {
    nextOrder = 'asc';
  }

  const storedRestaurants = getStoredRestaurant();

  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === 'asc' && resA.name > resB.name) ||
      (order === 'desc' && resB.name > resA.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder,
  });
});

router.get('/restaurants/:id', function (req, res) {
  const id = req.params.id;

  const storedRestaurants = getStoredRestaurant();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === id) {
      return res.render('restaurant-details', { restaurant });
    }
  }

  res.status(404).render('404');
});

module.exports = router;
