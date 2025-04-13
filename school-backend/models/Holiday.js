const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  occasion: { type: String, required: true },
});

module.exports = mongoose.model('Holiday', holidaySchema);