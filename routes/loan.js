const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');

router.post('/', async (req, res) => {
  const { purpose, amount, assets, time, scheme } = req.body;

  try {
    let loan = await Loan.findOne({ purpose });

    if (loan) {
      return res.status(400).json({ msg: 'Already applied for loan.' });
    }

    loan = new Loan({
      purpose,
      amount,
      assets,
      time,
      scheme,
    });

    await loan.save();
    res.json({ msg: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
