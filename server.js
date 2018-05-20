const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const PORT = 4001;

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on('connection', socket => {
  console.log('User connected');

  socket.on('message', (msg) => {
    console.log(`Message received: ${msg}`)
    io.sockets.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
