const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
const commentRoute = require("./routes/commentRoute");
const likeRoute = require("./routes/likeRoute");
// require("./models");

const app = express();
// parse requests of content-type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
	res.json({ message: "Welcone to mysql application." });
});

app.use("/blogs/users", userRoute);
app.use("/blogs/posts", postRoute);
app.use("/blogs/comments", commentRoute);
app.use("/blogs/likes", likeRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}. `);
});
