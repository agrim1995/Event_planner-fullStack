'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VendorServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vService_v_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vendors', // Table name of the referenced model
          key: 'id', // Primary key of the referenced model
        },
        onUpdate: 'CASCADE', // Action to perform when the referenced key is updated
        onDelete: 'CASCADE', // Action to perform when the referenced key is deleted
      },
      vendor_cost: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VendorServices');
  }
};