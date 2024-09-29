const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Address = require('../models/Address');

// POST route to register a user and their address
router.post('/register', async (req, res) => {
  try {
    const { name, address } = req.body;

    // Create new user
    const newUser = new User({ name });
    await newUser.save();

    // Create new address associated with the user
    const newAddress = new Address({ address, userId: newUser._id });
    await newAddress.save();

    res.status(201).json({ message: 'User and address saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user and address' });
  }
});

module.exports = router;
