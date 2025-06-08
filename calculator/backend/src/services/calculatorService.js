const addNumbers = (num1, num2) => num1 + num2;

const minusNumbers = (num1, num2) => num1 - num2;

const multiplyNumbers = (num1, num2) => num1 * num2;

const divideNumbers = (num1, num2) => {
	if (num2 === 0) throw new Error("Cannot divide by zero");
	return num1 / num2;
};

module.exports = {
	addNumbers,
	minusNumbers,
	multiplyNumbers,
	divideNumbers,
};
