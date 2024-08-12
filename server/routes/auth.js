const express = require('express');

const {
  login,
  registration,
  logout,
  refresh,
} = require('../controller/auth-controller');

const router = express.Router();

router.post('/registration', registration);

router.post('/login', login);

router.post('/logout', logout);

router.get('/refresh', refresh);

module.exports = router;
