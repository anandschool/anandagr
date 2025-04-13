const express = require('express');
const router = express.Router();
const { getDailyMessage, addDailyMessage } = require('../controllers/messageController');

router.get('/message', getDailyMessage);
router.post('/message', addDailyMessage);

module.exports = router;