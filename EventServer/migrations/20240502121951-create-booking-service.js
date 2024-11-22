'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BookingServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bs_booking_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bookings',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      bs_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ServiceMasters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      bs_vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Vendors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cost_of_service: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          notNull: { msg: "Cost of service cannot be null" }
        }
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
    await queryInterface.dropTable('BookingServices');
  }
};