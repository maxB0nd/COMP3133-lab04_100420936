const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://maxbond:7bYgQZdWX2mf3C5J@cluster0.3xbfj.mongodb.net/gbc_full_stack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });