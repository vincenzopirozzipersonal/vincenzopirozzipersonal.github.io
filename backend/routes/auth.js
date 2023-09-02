const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = new User(req.db);
    await user.createUser(email, password);
    res.status(201).send('User registered successfully');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
