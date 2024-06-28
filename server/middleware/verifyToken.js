const jwt = require('jsonwebtoken');

const { secret } = require('../config');

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, secret, (err) => {
      if (err) {
        return res.status(403).json(err.message);
      }
      next();
    });
  } else {
    return res.status(401).json('No token provided');
  }
};
