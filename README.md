# Web Socket Learning Project

A simple real-time chat application built using **Node.js**, **Express.js**, and **Socket.IO**. This project demonstrates how WebSockets enable instant communication between clients and the server without refreshing the page.

---

## Features

- Real-time messaging
- Multiple clients can connect simultaneously
- Messages are broadcast to all connected users
- Built with Socket.IO
- Simple frontend using HTML and JavaScript

---

## Tech Stack

- Node.js
- Express.js
- Socket.IO
- HTML
- JavaScript

---

## Project Structure

```text
Web-Sockets/
│
├── node_modules/
├── public/
│   └── index.html
│
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Web-Socket-Learning.git
```

### Move to Project Folder

```bash
cd Web-Socket-Learning
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node index.js
```

or

```bash
npm start
```

---

## How It Works

### Server Side

The server is created using Express and HTTP.

```javascript
const express = require("express");
const app = express();
const http = require("http").createServer(app);
```

Socket.IO is attached to the HTTP server.

```javascript
const { Server } = require("socket.io");
const io = new Server(http);
```

### Connection Event

Whenever a new client connects:

```javascript
io.on("connection", (socket) => {
    console.log("User Connected");
});
```

### Receiving Messages

The server listens for incoming messages.

```javascript
socket.on("message", (message) => {
    console.log(message);
});
```

### Broadcasting Messages

The message is sent to all connected clients.

```javascript
io.emit("message", message);
```

---

## Client Side Logic

### Connect to Server

```javascript
const socket = io();
```

### Send Message

When the button is clicked:

```javascript
socket.emit("message", messageInput.value);
```

The message is sent to the server.

### Receive Message

The client listens for incoming messages:

```javascript
socket.on("message", (message) => {
    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    allmessage.appendChild(messageElement);
});
```

Whenever a message is received, it is displayed on the screen.

---

## Message Flow

```text
Client A
   |
   | socket.emit("message")
   v
Server (Socket.IO)
   |
   | io.emit("message")
   v
All Connected Clients
```

Example:

```text
User A -> Hello
        |
        v
Server
        |
        v
User A -> Hello
User B -> Hello
User C -> Hello
```

---

## Learning Outcomes

Through this project, I learned:

- What WebSockets are
- Difference between HTTP and WebSockets
- Real-time communication
- Socket.IO events
- Client-server architecture
- Broadcasting messages to multiple users

---

## Future Improvements

- Username support
- Chat rooms
- Private messaging
- Online user count
- Message timestamps
- Database integration (MongoDB)

---

## Author

Nimish Patel

- MERN Stack Developer
- Competitive Programmer
- Learning Backend Development and WebSockets