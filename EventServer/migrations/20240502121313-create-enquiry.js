'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enquiries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      enq_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enq_contact: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alt_contact: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      event_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      enq_event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Events', // Table name of the referenced model
          key: 'id', // Primary key of the referenced model
        },
        onUpdate: 'CASCADE', // Action to perform when the referenced key is updated
        onDelete: 'CASCADE', // Action to perform when the referenced key is deleted
      },
      enq_msg: {
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
    await queryInterface.dropTable('Enquiries');
  }
};