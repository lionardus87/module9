"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getPosts = (res) => {
	Models.User.findAll({
		include: {
			model: Models.User,
			required: false,
		},
	})

		.then((data) => {
			res.send({ result: 200, data: data });
		})
		.catch((err) => {
			console.log(err);
			res.send({ result: 500, error: err.message });
		});
};
// uses JSON from request body to create new user in DB
const createPost = (data, res) => {
	Models.User.create(data)
		.then((data) => {
			res.send({ result: 200, data: data });
		})
		.catch((err) => {
			console.log(err);
			res.send({ result: 500, error: err.message });
		});
};
module.exports = {
	getPosts,
	createPost,
};
