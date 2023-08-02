
// Import socket.io-client library
const io = require("socket.io-client");

// Connect to the Socket.IO server
const socket = io("https://localhost:8000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

// Prompt the user to enter their name
const aname = prompt("Enter your name to join");

// Emit a "new-user-joined" event to the server, sending the user's name
socket.emit("new-user-joined", aname);