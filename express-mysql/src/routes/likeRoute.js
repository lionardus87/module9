const express = require("express");
const router = express.Router();
const LikeController = require("../controllers/likeController");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
	LikeController.getLikes(res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
	LikeController.createLike(req.body, res);
});

module.exports = router;
