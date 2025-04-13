const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const holidayRoutes = require('./routes/holidayRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log('DB connection error: ', err));

app.use('/api', holidayRoutes);
app.use('/api', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));