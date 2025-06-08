const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

let dbConnect = require("./src/config/dbConnect");
require("dotenv").config();

let userRoutes = require("./src/routes/userRoute");
let commentRoutes = require("./src/routes/commentRoute");
let postRoutes = require("./src/routes/postRoute");
let likeRoutes = require("./src/routes/likeRoute");

app.use(cors());
//calculator route
const calculatorRoutes = require("./src/routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

// parse requests of content-type -application / json;
app.use(express.json());
app.get("/", (req, res) => {
	res.json({ message: "Welcome to my MongoDB application." });
});
app.use("/blog/users", userRoutes);
app.use("/blog/posts", postRoutes);
app.use("/blog/comments", commentRoutes);
app.use("/blog/likes", likeRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}.`);
// });
mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB");
	//connect the server
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});

("use strict");
module.exports = {
	User: require("./src/models/user"),
};
