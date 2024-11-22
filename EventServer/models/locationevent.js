'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocationEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LocationEvent.belongsTo(models.LocationMaster, {
        foreignKey: 'l_e_location_id',
        onDelete: 'CASCADE',
      });
      LocationEvent.belongsTo(models.Event, {
        foreignKey: 'l_e_event_id',
        onDelete: 'CASCADE',
      });
    }
  }
  LocationEvent.init({
    l_e_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Location ID cannot be null" }
      }
    },
    l_e_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Event ID cannot be null" }
      }
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'LocationEvent',
  });
  return LocationEvent;
};