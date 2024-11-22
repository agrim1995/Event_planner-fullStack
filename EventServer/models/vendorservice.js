'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VendorService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Vendor, { foreignKey: 'vService_v_id', as: 'vendor' }); // Define association to Vendor model
    }
  }
  VendorService.init({
    vendor_cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Vendor cost is required'
        },
      },
    },
  }, {
    sequelize,
    modelName: 'VendorService',
  });
  return VendorService;
};