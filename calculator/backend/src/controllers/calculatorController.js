const {
	addNumbers,
	minusNumbers,
	multiplyNumbers,
	divideNumbers,
} = require("../services/calculatorService");

const handleAdd = ({ num1, num2 }) => {
	return addNumbers(Number(num1), Number(num2));
};
const handleMinus = ({ num1, num2 }) => {
	return minusNumbers(Number(num1), Number(num2));
};

const handleMultiply = ({ num1, num2 }) => {
	return multiplyNumbers(Number(num1), Number(num2));
};

const handleDivide = ({ num1, num2 }) => {
	return divideNumbers(Number(num1), Number(num2));
};

module.exports = {
	handleAdd,
	handleMinus,
	handleMultiply,
	handleDivide,
};
