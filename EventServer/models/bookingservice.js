'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookingService.belongsTo(models.Booking, {
        foreignKey: 'bs_booking_id',
        onDelete: 'CASCADE',
      });
      BookingService.belongsTo(models.ServiceMaster, {
        foreignKey: 'bs_service_id',
        onDelete: 'CASCADE',
      });
      BookingService.belongsTo(models.Vendor, {
        foreignKey: 'bs_vendor_id',
        onDelete: 'CASCADE',
      });
    }
  }
  BookingService.init({
    bs_booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Booking service ID cannot be null" }
      }
    },
    bs_service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Service ID cannot be null" }
      }
    },
    bs_vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Vendor ID cannot be null" }
      }
    },
    cost_of_service: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: { msg: "Cost of service cannot be null" },
        min: { args: [0], msg: "Cost of service must be non-negative" }
      }
    }

  }, {
    sequelize,
    modelName: 'BookingService',
  });
  return BookingService;
};