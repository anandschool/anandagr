const Message = require('../models/Message');

exports.getDailyMessage = async (req, res) => {
  try {
    const message = await Message.findOne({ date: new Date().toISOString().slice(0, 10) });
    if (!message) return res.status(404).json({ message: 'No message for today' });
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addDailyMessage = async (req, res) => {
  const { content } = req.body;
  try {
    const newMessage = new Message({ content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};