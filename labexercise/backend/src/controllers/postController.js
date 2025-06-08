const Post = require("../models/post");

exports.createPost = async (req, res) => {
	try {
		const post = await Post.create(req.body);
		res.status(201).json(post);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getPosts = async (req, res) => {
	const posts = await Post.find().populate("userId", "userName");
	res.json(posts);
};
