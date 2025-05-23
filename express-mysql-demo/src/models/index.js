"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
async function init() {
	await User.sync(); // sync the model
	// also sync any extra models here
	await Post.sync();
}
Post.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Post);
init();
module.exports = {
	User, // export the model
	Post,
	// also export any extra models here
};
