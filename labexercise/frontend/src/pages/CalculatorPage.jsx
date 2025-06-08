import React, { useReducer, useState } from "react";
import {
	Container,
	TextField,
	ButtonGroup,
	Button,
	Typography,
	Box,
} from "@mui/material";
import { axiosCalculate, fetchCalculate } from "../api/calculatorApi";

const initialCalcState = {
	num1: "",
	num2: "",
	operator: "+",
};

const formReducer = (state, action) => {
	switch (action.type) {
		case "inputField":
			return { ...state, [action.field]: action.value };
		case "clear":
			return initialCalcState;
		default:
			return state;
	}
};

const operations = {
	"+": "add",
	"-": "minus",
	X: "multiply",
	"/": "divide",
};

export default function CalculatorPage() {
	const [formData, dispatch] = useReducer(formReducer, initialCalcState);
	const [fetchResult, setFetchResult] = useState("");
	const [axiosResult, setAxiosResult] = useState("");
	const [message, setMessage] = useState("");

	const { num1, num2, operator } = formData;

	const handleCalculate = async () => {
		const data = await fetchCalculate(operations[operator], num1, num2);
		if (data.result !== undefined) {
			setFetchResult(data.result);
			setMessage("Calculation done using Fetch.");
		} else {
			setFetchResult(data.error || "Unknown error");
			setMessage("Error using Fetch.");
		}
	};

	const handleAxiosCalculate = async () => {
		const data = await axiosCalculate(operations[operator], num1, num2);
		if (data.result !== undefined) {
			setAxiosResult(data.result);
			setMessage("Calculation done using Axios.");
		} else {
			setAxiosResult(data.error || "Unknown error");
			setMessage("Error using Axios.");
		}
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				Calculator App
			</Typography>

			<TextField
				label="Number 1"
				type="number"
				fullWidth
				margin="normal"
				value={num1}
				onChange={(e) =>
					dispatch({ type: "inputField", field: "num1", value: e.target.value })
				}
			/>

			<TextField
				label="Number 2"
				type="number"
				fullWidth
				margin="normal"
				value={num2}
				onChange={(e) =>
					dispatch({ type: "inputField", field: "num2", value: e.target.value })
				}
			/>

			{/* Operatiobns buttons */}
			<Typography variant="subtitle1" sx={{ mt: 2 }}>
				Choose Operation:
			</Typography>
			<ButtonGroup fullWidth variant="outlined" sx={{ mt: 1, gap: 2 }}>
				{["+", "-", "X", "/"].map((op) => (
					<Button
						key={op}
						variant={operator === op ? "contained" : "outlined"}
						color="info"
						onClick={() =>
							dispatch({ type: "inputField", field: "operator", value: op })
						}
					>
						{op.charAt(0).toUpperCase() + op.slice(1)}
					</Button>
				))}
			</ButtonGroup>

			{/* Calcute button */}
			<Box display="flex" justifyContent="space-between" mt={2} mb={2}>
				<Button variant="outlined" onClick={handleCalculate}>
					Fetch Calculate
				</Button>
				<Button variant="outlined" onClick={handleAxiosCalculate}>
					Axios Calculate
				</Button>
				{/* Clear button */}
				<Button
					color="secondary"
					variant="contained"
					onClick={() => dispatch({ type: "clear" })}
				>
					Clear
				</Button>
			</Box>

			<Typography variant="h6">Fetch Result: {fetchResult}</Typography>
			<Typography variant="h6">Axios Result: {axiosResult}</Typography>
			<Typography variant="body1" color="text.secondary">
				Message: {message}
			</Typography>
		</Container>
	);
}
