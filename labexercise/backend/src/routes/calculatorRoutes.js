const express = require("express");
const router = express.Router();
const {
	handleAdd,
	handleMinus,
	handleMultiply,
	handleDivide,
} = require("../controllers/calculatorController");

router.get("/add", async (req, res) => {
	try {
		const result = await handleAdd(req.query);
		res.status(200).json({ result });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.get("/minus", async (req, res) => {
	try {
		const result = await handleMinus(req.query);
		res.status(200).json({ result });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.get("/multiply", async (req, res) => {
	try {
		const result = await handleMultiply(req.query);
		res.status(200).json({ result });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

router.get("/divide", async (req, res) => {
	try {
		const result = await handleDivide(req.query);
		res.status(200).json({ result });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
