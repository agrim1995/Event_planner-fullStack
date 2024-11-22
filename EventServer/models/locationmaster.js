'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocationMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
      LocationMaster.belongsTo(models.StateMaster, { foreignKey: 'location_state_id', as: 'state' }); // LocationMaster belongs to StateMaster
      LocationMaster.belongsTo(models.CityMaster, { foreignKey: 'location_city_id', as: 'city' }); // LocationMaster belongs to CityMaster
    }
  }
  LocationMaster.init({
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Location name cannot be empty" },
        notNull: { msg: "Location name cannot be null" }
      },
    },
    location_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Location state ID cannot be null" }
      },
    },
    location_city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Location city ID cannot be null" }
      },
    },

  }, {
    sequelize,
    modelName: 'LocationMaster',
  });
  return LocationMaster;
};