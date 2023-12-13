const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const { User } = require('../models/user');

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

    return res.json(user.email);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
