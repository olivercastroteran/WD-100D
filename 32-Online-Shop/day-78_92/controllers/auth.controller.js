const User = require('../models/user.model');
const authUtil = require('../util/authentication');
const validation = require('../util/validation');
const sessionFlash = require('../util/session-flash');

function getSignup(req, res) {
  let sessionData = sessionFlash.getSessionData(req);

  if (!sessionData) {
    sessionData = {
      email: '',
      confirmEmail: '',
      password: '',
      fullname: '',
      street: '',
      postal: '',
      city: '',
    };
  }

  res.render('customer/auth/signup', { inputData: sessionData });
}

async function signup(req, res, next) {
  const { email, password, fullname, street, postal, city } = req.body;
  const enteredData = {
    email,
    password,
    confirmEmail: req.body['confirm-email'],
    fullname,
    street,
    postal,
    city,
  };

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
    sessionFlash.flashDataToSession(
      req,
      {
        errorMessage:
          'Please check your input. Password must be at least 6 characters long, and postal code 5',
        ...enteredData,
      },
      function () {
        res.redirect('/signup');
      },
    );
    return;
  }

  const user = new User(email, password, fullname, street, postal, city);

  try {
    const existsAlready = await user.existsAlready();
    if (existsAlready) {
      sessionFlash.flashDataToSession(
        req,
        {
          errorMessage: 'User exists already - Try logging in instead',
          ...enteredData,
        },
        function () {
          res.redirect('/signup');
        },
      );
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
  let sessionData = sessionFlash.getSessionData(req);

  if (!sessionData) {
    sessionData = {
      email: '',
      password: '',
    };
  }

  res.render('customer/auth/login', { inputData: sessionData });
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
    sessionFlash.flashDataToSession(
      req,
      {
        errorMessage:
          'Invalid credentials, please check your email and password',
        email: user.email,
        password: user.password,
      },
      function () {
        res.redirect('/login');
      },
    );
    return;
  }

  const passwordIsCorrect = await user.hasMatchingPassword(
    existingUser.password,
  );

  if (!passwordIsCorrect) {
    sessionFlash.flashDataToSession(
      req,
      {
        errorMessage:
          'Invalid credentials, please check your email and password',
        email: user.email,
        password: user.password,
      },
      function () {
        res.redirect('/login');
      },
    );
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
