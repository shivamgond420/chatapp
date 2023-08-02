const express = require("express");
const app = express(); // Create an instance of Express

const cors = require("cors");
app.use(cors("http://127.0.0.1:5500"));

const io = require("socket.io")(8000);

const user = {};
// socket.on("connect_error", (err) => {
//    console.log(`connect_error due to ${err.message}`);
//  });
io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    console.log("new user ", name);
    user[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });


  socket.on("send", (message) => {
    socket.broadcast.emit("receive", {
      message: message,
      name: user[socket.id],
    });
  });
});
// Create an instance of Express
//  const server = require("http").createServer(app); // Create a server using Express app
//  const io = require("socket.io");
// const http = require("http");
// const express = require("express");
// const app = express();

// // Create an HTTP server using the Express app
// const httpServer = http.createServer(app);

// // Initialize socket.io with the HTTP server
// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "http://127.0.0.1:5500",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["abcd"],
//     credentials: true,
//   },
// });

// const user = {};
// const socket = require("socket.io-client")("http://127.0.0.1:5500");

// socket.on("connect_error", (err) => {
//   console.log(`connect_error due to ${err.message}`);
// });
// io.on("connection", (socket) => {
//   socket.on("new-user-joined", (name) => {
//     console.log("new user ", name);
//     user[socket.id] = name;
//     socket.broadcast.emit("user-joined", name);
//   });

//   socket.on("send", (message) => {
//     socket.broadcast.emit("receive", {
//       message: message,
//       name: user[socket.id],
//     });
//   });
// });
