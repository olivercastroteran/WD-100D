const path = require('path');

const express = require('express');
const csurf = require('csurf');
const expressSession = require('express-session');

// Session & DB
const createSessionConfig = require('./config/session');
const db = require('./data/database');
// Middlewares
const addCsrfToken = require('./middlewares/csrf-token');
const errorHandler = require('./middlewares/error-handler');
const checkAuthStatus = require('./middlewares/check-auth');
const cartMiddleware = require('./middlewares/cart');
// Routes
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const protectRoutes = require('./middlewares/protect-routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const sessionConfig = createSessionConfig();
app.use(expressSession(sessionConfig));

app.use(csurf());
app.use(cartMiddleware);
app.use(addCsrfToken);
app.use(checkAuthStatus);

app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);
app.use('/cart', cartRoutes);
app.use(protectRoutes);
app.use('/admin', adminRoutes);

app.use(errorHandler);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to database!');
    console.log(error);
  });
