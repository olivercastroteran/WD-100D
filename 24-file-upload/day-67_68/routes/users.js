const express = require('express');
const multer = require('multer');

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'users');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storageConfig });
const router = express.Router();

router.get('/', function (req, res) {
  res.render('profiles');
});

router.post('/profiles', upload.single('image'), function (req, res) {
  const uploadedImg = req.file;
  const userData = req.body;

  console.log(uploadedImg);
  console.log(userData);

  res.redirect('/');
});

router.get('/new-user', function (req, res) {
  res.render('new-user');
});

module.exports = router;
