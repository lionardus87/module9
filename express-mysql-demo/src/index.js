const express = require("express");
require("dotenv").config();
require("./dbConnect");
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
// require("./models");

const app = express();
// parse requests of content-type - application / json;
app.use(express.json());
app.get("/", (req, res) => {
	res.json({ message: "Helcone to mysql application." });
});

app.use("api/users", userRoute);
app.use("api/posts", postRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}. `);
});
