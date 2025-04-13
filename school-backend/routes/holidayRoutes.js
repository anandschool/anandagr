const express = require('express');
const router = express.Router();
const { getHolidays, addHoliday } = require('../controllers/holidayController');

router.get('/holidays', getHolidays);
router.post('/holidays', addHoliday);

module.exports = router;