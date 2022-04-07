'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parcels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID
      },
      freeAccess: {
        type: Sequelize.STRING
      },
      plotOwnership: {
        type: Sequelize.STRING
      },
      typeOfEnclosure: {
        type: Sequelize.STRING
      },
      doesParcelHaveBuildings: {
        type: Sequelize.STRING
      },
      noOfBuildingsWithinEnclosure: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Parcels');
  }
};