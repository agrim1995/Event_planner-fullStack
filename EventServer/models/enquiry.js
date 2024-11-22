'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enquiry extends Model {

    static associate(models) {
      // Define associations here
      Enquiry.belongsTo(models.Event, { foreignKey: 'enq_event_id', as: 'event' }); // Enquiry belongs to Event
    }
  }
  Enquiry.init({
    enq_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Enquiry name cannot be empty" },
        notNull: { msg: "Enquiry name cannot be null" }
      },
    },
    enq_contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Enquiry contact cannot be empty" },
        notNull: { msg: "Enquiry contact cannot be null" }
      },
    },
    alt_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: "Event date cannot be null" }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enq_msg: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Enquiry',
  });
  return Enquiry;
};