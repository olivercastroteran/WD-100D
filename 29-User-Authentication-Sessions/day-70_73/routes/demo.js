const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../data/database');

const router = express.Router();

router.get('/', function (req, res) {
  res.render('welcome');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.post('/signup', async function (req, res) {
  const userData = req.body;
  const email = userData.email;
  const confirmEmail = userData['confirm-email'];
  const password = userData.password;

  if (
    !email ||
    !confirmEmail ||
    !password ||
    password.length.trim() < 6 ||
    email !== confirmEmail ||
    !email.includes('@')
  ) {
    console.log('Incorrect Data');
    return res.redirect('/signup');
  }

  const existingUser = await db
    .getDb()
    .collection('users')
    .findOne({ email: email });

  if (existingUser) {
    console.log('User exists already');
    return res.redirect('/signup');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = { email, password: hashedPassword };

  await db.getDb().collection('users').insertOne(user);

  res.redirect('/login');
});

router.post('/login', async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const password = userData.password;

  const existingUser = await db
    .getDb()
    .collection('users')
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    console.log('Could not log in');
    return res.redirect('/login');
  }

  const passwordsMatch = await bcrypt.compare(password, existingUser.password);

  if (!passwordsMatch) {
    console.log('Could not log in - wrong password');
    return res.redirect('/login');
  }

  console.log('User is authenticated!');
  res.redirect('/admin');
});

router.get('/admin', function (req, res) {
  res.render('admin');
});

router.post('/logout', function (req, res) {});

module.exports = router;
