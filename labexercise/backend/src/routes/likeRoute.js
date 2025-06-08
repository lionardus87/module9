const express = require("express");
const { likePost } = require("../controllers/likeController");
const router = express.Router();

router.post("/", likePost);

module.exports = router;
