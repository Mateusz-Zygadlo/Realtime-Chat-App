import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const port = process.env.POST || 8000;

const mongoDb = process.env.MONGO_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

const chat: any = [];

io.on("connection", (socket: Socket) => {
  socket.on("message", (name: any, message: any) => {
    chat.push({name, message});
    io.sockets.emit('serverMessage', chat);
  })
  socket.on('chat', () => {
    io.sockets.emit('serverMessage', chat);
  });
});

httpServer.listen(port);