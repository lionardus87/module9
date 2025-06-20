const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
	PostController.getPosts(res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
	PostController.createPost(req.body, res);
});

module.exports = router;
