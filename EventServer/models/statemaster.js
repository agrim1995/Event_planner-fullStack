'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StateMaster extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  StateMaster.init({

    state_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "State Name cannot be empty" },
        notNull: { msg: "State Name cannot be null" }
      },
    },
  }, {
    sequelize,
    modelName: 'StateMaster',
  });
  return StateMaster;
};