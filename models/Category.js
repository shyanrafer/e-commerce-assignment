// starter code provided from assignment
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    shirts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shorts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shoes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    music: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
