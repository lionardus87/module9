const express = require("express");
const app = express();
const weatherRoute = require("./src/routes/weatherRoute");
require("dotenv").config();

app.use("/api", weatherRoute);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
