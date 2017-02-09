const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public')
const {generateMessage, generateLocationMessage} = require('./utils/message');
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

/*configure middleware*/
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('admin', 'Welcome to the chat app'));
  socket.broadcast.emit('newMessage', generateMessage('admin', 'New user joined'));

  socket.on('createMessage', (newMessage, callback) => {
    console.log('createMessage', newMessage);
    io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
    callback('This is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
