'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Event, { foreignKey: 'b_event_id', as: 'event' }); // Define association to Event model
    }
  }
  Budget.init({
    budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: true,
      },
    },
    requirement: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};