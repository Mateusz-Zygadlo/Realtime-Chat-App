const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const post = process.env.POST || 8000;

const mongoDb = process.env.MONGO_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const indexRoutes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use('/', indexRoutes);

app.use(cors({
  origin: 'https://localhost:3000',
  method: 'GET, POST, PUT, DELETE',
  credentials: true,
}))

app.listen(post, () => console.log('api works'))