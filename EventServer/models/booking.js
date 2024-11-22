'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.Event, { foreignKey: 'booking_event_id', as: 'event' });
      Booking.belongsTo(models.LocationMaster, { foreignKey: 'booking_location_id', as: 'location' });
      Booking.belongsTo(models.Enquiry, { foreignKey: 'booking_enquiry_id', as: 'enquiry' });
    }
  }
  Booking.init({
    booking_event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Booking event ID cannot be null" }
      }
    },
    no_of_days: DataTypes.INTEGER,
    budget: DataTypes.DECIMAL,
    booking_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Booking location ID cannot be null" }
      }
    },
    event_date: DataTypes.DATE,
    event_time: DataTypes.TIME,
    booking_enquiry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Booking enquiry ID cannot be null" }
      }
    },
    booking_user_manager_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Booking user manager ID cannot be empty" },
        notNull: { msg: "Booking user manager ID cannot be null" }
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};