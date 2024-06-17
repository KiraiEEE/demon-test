'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      SuperAdmin: {
        type: Sequelize.BOOLEAN
      },
      Admin: {
        type: Sequelize.BOOLEAN
      },
      Tech: {
        type: Sequelize.BOOLEAN
=======
      roomID: {
        type: Sequelize.INTEGER
      },
      roomName: {
        type: Sequelize.STRING
>>>>>>> master
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
    await queryInterface.dropTable('Roles');
  }
};