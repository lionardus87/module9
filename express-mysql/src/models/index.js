"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const PostLike = require("./like");

Post.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Post, { foreignKey: "userId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

User.belongsToMany(Post, {
	through: PostLike,
	as: "LikedPosts",
	foreignKey: "userId",
});
Post.belongsToMany(User, {
	through: PostLike,
	as: "Likers",
	foreignKey: "postId",
});

async function init() {
	await User.sync(); // sync the model
	// also sync any extra models here
	await Post.sync();
	await Comment.sync();
	await PostLike.sync();
}

init();

module.exports = {
	User, // export the model
	Post,
	Comment,
	PostLike,
	// also export any extra models here
};
