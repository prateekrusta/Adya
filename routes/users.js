const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
//@desc     Register a user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('skill', 'Please add skill').not().isEmpty(),
    check('district', 'Please add district').not().isEmpty(),
    check('state', 'Please add state').not().isEmpty(),
    check('group', 'Please add group').not().isEmpty(),
    check('phone', 'Please enter a phone number with 10 digits').isLength({
      min: 10,
      max: 10,
    }),
    check(
      'password',
      'Please enter a password with 4 or more characters'
    ).isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, skill, district, state, group, password } = req.body;

    try {
      let user = await User.findOne({ phone });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        phone,
        skill,
        district,
        group,
        state,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.put('/:id', async (req, res) => {
  const { name, phone, skill, district, state, group, password } = req.body;

  //Build Contact object
  const userFields = {};
  if (name) userFields.name = name;
  if (phone) userFields.phone = phone;
  if (skill) userFields.skill = skill;
  if (district) userFields.district = district;
  if (state) userFields.state = state;
  if (group) userFields.group = group;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    userFields.password = await bcrypt.hash(password, salt);
  }

  try {
    let user = await User.find(req.params.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
