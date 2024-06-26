const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const { secret } = require('../config');
const { User } = require('../models/user');

const generateAccessToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

exports.registration = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Registration error', errors });
    }

    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = bcrypt.hashSync(password, 6);
    await User.create({ email, password: hashPassword });

    return res.json({ message: 'User registered' });
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: `User ${email} doesn't exists` });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ message: `Password ${password} is incorrect` });
    }

    const token = generateAccessToken(user._id);

    return res.send({ token });
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    return res.send({ user });
  } catch (e) {
    res.status(500).json(e.message);
  }
};
