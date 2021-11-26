const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const post = process.env.POST || 8000;

const mongoDb = process.env.MONGO_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.listen(post, () => console.log('api works'))