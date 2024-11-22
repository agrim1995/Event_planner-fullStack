'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CityMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here
      CityMaster.belongsTo(models.StateMaster, { foreignKey: 'city_state_id', as: 'state' }); // CityMaster belongs to StateMaster
    }
  }
  CityMaster.init({
    city_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "City name cannot be empty" },
        notNull: { msg: "City name cannot be null" }
      },
    },
    city_state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "State ID cannot be null" }
      },
    },

  }, {
    sequelize,
    modelName: 'CityMaster',
  });
  return CityMaster;
};