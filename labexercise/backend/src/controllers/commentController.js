const Comment = require("../models/comment");

exports.createComment = async (req, res) => {
	try {
		const comment = await Comment.create(req.body);
		res.status(201).json(comment);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
