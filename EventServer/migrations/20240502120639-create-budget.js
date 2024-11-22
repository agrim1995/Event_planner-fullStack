'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Budgets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      b_event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Events', // Table name of the referenced model
          key: 'id', // Primary key of the referenced model
        },
        onUpdate: 'CASCADE', // Action to perform when the referenced key is updated
        onDelete: 'CASCADE', // Action to perform when the referenced key is deleted
      },
      budget: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      requirement: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('Budgets');
  }
};