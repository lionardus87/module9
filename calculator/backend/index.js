const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
//calculator route
const calculatorRoutes = require("./src/routes/calculatorRoutes");
app.use("/calculator", calculatorRoutes);

// parse requests of content-type -application / json;
app.use(express.json());
app.get("/", (req, res) => {
	res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port 
${PORT}.`);
});
