"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  userRole.init(
    {
      rolename: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "name can't be empty" },
          notNull: { msg: "name can't be null" },
        },
      },
    },
    {
      sequelize,
      modelName: "userRole",
    }
  );
  return userRole;
};
