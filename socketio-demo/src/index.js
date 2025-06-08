const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
const { join } = require("node:path");

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "/pages/index.html"));
});

io.on("connection", (socket) => {
	console.log(socket.id);
	console.log("a user is connected");
	io.emit("connection", "a user connected");

	socket.on("chat message", (msg) => {
		console.log("message: " + msg);
		io.emit("server message", msg);
	});
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});
