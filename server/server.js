const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public')
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

/*configure middleware*/
app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'Mike',
    text: 'Hey, what is going on?',
    createdAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected.');
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
