const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/commentController");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
	CommentController.getComments(res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
	CommentController.createComment(req.body, res);
});

module.exports = router;
