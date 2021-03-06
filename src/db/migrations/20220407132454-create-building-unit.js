"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BuildingUnits", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      floorNumber: {
        type: Sequelize.INTEGER,
      },
      unitNo: {
        type: Sequelize.INTEGER,
      },
      unitType: {
        type: Sequelize.STRING,
      },
      NoOfRooms: {
        type: Sequelize.INTEGER,
      },
      propertyUse1: {
        type: Sequelize.INTEGER,
      },
      buildingPurpose: {
        type: Sequelize.STRING,
      },
      buildingOccupants: {
        type: Sequelize.STRING,
      },
      howManyOccupants: {
        type: Sequelize.INTEGER,
      },
      buildingId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      creationDate: {
        type: Sequelize.STRING,
      },
      editDate: {
        type: Sequelize.STRING,
      },
      editor: {
        type: Sequelize.STRING,
      },
      x: {
        type: Sequelize.STRING,
      },
      y: {
        type: Sequelize.STRING,
      },
      occupantId: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BuildingUnits");
  },
};
