const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = require('./router')
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

io.on('connection', (socket) => {
  console.log('We hava a new connection!!!');

  socket.on('disconnect', () => {
    console.log('User had left!!!');
  })
})


app.use(router)

// // 세션 사용
// app.use(session({
//   secret: 'balloon',
//   resave: false,
//   saveUninitialized: true
// }))

const cors = require('cors');
const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    console.log("io connect join name & room", name, room, "socket_id", socket.id);

    console.log("server connect socket", socket.id)
    const { error, user } = addUser({ id: socket.id, name, room });


    if (error) return callback(error);

    socket.join(user.room);

    // emit:  backend to frontend
    // socket.emit('message', { user: 'admin', message: `${user.name}, welcome to room ${user.room}.` });

    //방에 있는 모두에게 알리는 것.
    // socket.broadcast.to(user.room).emit('message', { user: 'admin', message: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  // on:  frontend to backend
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, message: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      // io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => `Server running on port ${PORT}`);
