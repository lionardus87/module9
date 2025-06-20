const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../config/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
		},
		image: {
			type: DataTypes.STRING,
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		sequelize: sequelizeInstance,
		modelName: "posts", // use lowercase plural format
		timestamps: true,
		freezeTableName: true,
	}
);
module.exports = Post;
