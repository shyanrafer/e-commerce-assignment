// starter code provided from assignment
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
// importing product and tag page such that i can pull data from them
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    productTag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.STRING,
      references: {
        model: Product,
        key: 'id'
      }
    },
    tag_id: {
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
