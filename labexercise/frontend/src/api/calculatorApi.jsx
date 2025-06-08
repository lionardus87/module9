import axios from "axios";

const Calculator_URL = "http://localhost:8080/calculator";

export const fetchCalculate = async (operations, num1, num2) => {
	try {
		const res = await fetch(
			`${Calculator_URL}/${operations}?num1=${num1}&num2=${num2}`
		);
		const data = await res.json();
		return data;
	} catch (error) {
		return { error: error.message };
	}
};

export const axiosCalculate = async (operations, num1, num2) => {
	try {
		const res = await axios.get(`${Calculator_URL}/${operations}`, {
			params: { num1, num2 },
		});
		return res.data;
	} catch (error) {
		return { error: error.message };
	}
};
