'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LocationMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location_address: {
        type: Sequelize.STRING,
      },
      location_state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'StateMasters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      location_city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'CityMasters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('LocationMasters');
  }
};