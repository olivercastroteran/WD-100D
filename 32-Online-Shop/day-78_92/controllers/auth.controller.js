const User = require('../models/user.model');
const authUtil = require('../util/authentication');
const validation = require('../util/validation');

function getSignup(req, res) {
  res.render('customer/auth/signup');
}

async function signup(req, res, next) {
  const { email, password, fullname, street, postal, city } = req.body;
  if (
    !validation.userDetailsAreValid(
      email,
      password,
      fullname,
      street,
      postal,
      city,
    ) ||
    !validation.emailIsConfirmed(email, req.body['confirm-email'])
  ) {
    res.redirect('/signup');
    return;
  }

  const user = new User(email, password, fullname, street, postal, city);

  try {
    const existsAlready = await user.existsAlready();
    if (existsAlready) {
      res.redirect('/signup');
      return;
    }
    await user.signup();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

async function login(req, res, next) {
  const user = new User(req.body.email, req.body.password);
  let existingUser;

  try {
    existingUser = await user.getUserWithSameEmail();
  } catch (error) {
    next(error);
    return;
  }

  if (!existingUser) {
    res.redirect('/login');
    return;
  }

  const passwordIsCorrect = await user.hasMatchingPassword(
    existingUser.password,
  );

  if (!passwordIsCorrect) {
    res.redirect('/login');
    return;
  }

  authUtil.createUserSession(req, existingUser, function () {
    res.redirect('/');
  });
}

async function logout(req, res) {
  authUtil.destroyUserAuthSession(req);
  res.redirect('/login');
}

module.exports = {
  getSignup,
  getLogin,
  signup,
  login,
  logout,
};
