const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('/routes/userRoute');

const app = express();
app.use(express.json());

mongoose.connect('REMOVED', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });