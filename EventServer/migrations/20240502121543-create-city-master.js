'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CityMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      city_state_id: {
        type: Sequelize.INTEGER,
        allowNull: false, // Ensure the foreign key is not null
        references: {
          model: 'StateMasters', // Name of the referenced table
          key: 'id' // Primary key of the referenced table
        },
        onUpdate: 'CASCADE', // Action to take when the referenced row is updated
        onDelete: 'CASCADE' // Action to take when the referenced row is deleted
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
    await queryInterface.dropTable('CityMasters');
  }
};