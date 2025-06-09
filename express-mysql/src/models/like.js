const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../config/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class PostLike extends Model {}
// Sequelize will create this table if it doesn't exist on startup
PostLike.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		sequelize: sequelizeInstance,
		modelName: "postlikes", // use lowercase plural format
		timestamps: true,
		freezeTableName: true,
	}
);
module.exports = PostLike;
