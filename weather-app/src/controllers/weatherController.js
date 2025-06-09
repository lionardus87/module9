const axios = require("axios");
require("dotenv").config();

const getWeatherByCity = async (req, res) => {
	const { city } = req.params;
	const { units = "metric" } = req.query;
	const apiKey = process.env.OPENWEATHER_API_KEY;

	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
		);
		res.json(response.data);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to fetch weather data", error: error.message });
	}
};

module.exports = {
	getWeatherByCity,
};
