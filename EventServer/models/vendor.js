'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Vendor.init({
    v_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Vendor name cannot be empty" },
        notNull: { msg: "Vendor name cannot be null" }
      },
    },
    v_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      
  },
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};