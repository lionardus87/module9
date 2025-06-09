const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
	UserController.getUsers(res);
});
// matches POST requests sent to /api/users/create
router.post("/", (req, res) => {
	UserController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
	UserController.updateUser(req, res);
});
// matches DELETE requests to /api/users/123 (123 in id param)
router.delete("/:id", (req, res) => {
	UserController.deleteUser(req, res);
});

module.exports = router;
