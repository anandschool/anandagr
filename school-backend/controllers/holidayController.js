const Holiday = require('../models/Holiday');

exports.getHolidays = async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.json(holidays);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addHoliday = async (req, res) => {
  const { date, occasion } = req.body;
  try {
    const newHoliday = new Holiday({ date, occasion });
    await newHoliday.save();
    res.status(201).json(newHoliday);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};