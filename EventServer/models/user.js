"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.belongsTo(models.userRole, {
        foreignKey: "user_role_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    { 
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Username can't be empty" },
          notNull: { msg: "Username can't be null" },
        },
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "contact can't be empty" },
          notNull: { msg: "contact can't be null" },
          len: {
            args: [10, 10],
            msg: "contact number must be 10 characters long",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: {
          msg: "Email must be unique",
        },
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "password can't be empty" },
          notNull: { msg: "password can't be null" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );
  return User;
};
