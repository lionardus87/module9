const PostLike = require("../models/postLike");

exports.likePost = async (req, res) => {
	try {
		const like = await PostLike.create(req.body);
		res.status(201).json(like);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
