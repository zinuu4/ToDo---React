const express = require('express');
const { check } = require('express-validator');

const { login, registration, getUser } = require('../controller/auth');

const router = express.Router();

router.post(
  '/registration',
  [
    check('email', 'Enter correct email').isEmail(),
    check(
      'password',
      'Password should be longer than 4 and shorter than 12 symbols',
    ).isLength({ min: 4, max: 12 }),
  ],
  registration,
);

router.post('/login', login);

router.get('/getUser', getUser);

module.exports = router;
