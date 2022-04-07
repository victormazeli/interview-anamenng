'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buildingUse: {
        type: Sequelize.STRING
      },
      isBuildingForBuisness: {
        type: Sequelize.STRING
      },
      buildingTagNo: {
        type: Sequelize.STRING
      },
      buildingSerialNo: {
        type: Sequelize.STRING
      },
      estateName: {
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
    await queryInterface.dropTable('Buildings');
  }
};