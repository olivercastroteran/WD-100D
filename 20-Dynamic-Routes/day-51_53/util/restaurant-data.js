const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

function getRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const restaurants = JSON.parse(fileData);

  return restaurants;
}

function storeRestaurants(restaurants) {
  fs.writeFileSync(filePath, JSON.stringify(restaurants));
}

module.exports = {
  getRestaurants,
  storeRestaurants,
};
