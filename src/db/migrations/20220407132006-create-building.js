"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Buildings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUIDV4,
      },
      buildingUse: {
        type: Sequelize.STRING,
      },
      isBuildingForBuisness: {
        type: Sequelize.STRING,
      },
      buildingTagNo: {
        type: Sequelize.INTEGER,
      },
      buildingSerialNo: {
        type: Sequelize.INTEGER,
      },
      estateName: {
        type: Sequelize.STRING,
      },
      buildingStatus: {
        type: Sequelize.STRING,
      },
      knowyearOfCompletion: {
        type: Sequelize.STRING,
      },
      yearOfCompletion: {
        type: Sequelize.STRING,
      },
      approximateAge: {
        type: Sequelize.INTEGER,
      },
      condition: {
        type: Sequelize.STRING,
      },
      buildingType: {
        type: Sequelize.STRING,
      },
      arrangement: {
        type: Sequelize.STRING,
      },
      roofCovering: {
        type: Sequelize.STRING,
      },
      mainWallMaterial: {
        type: Sequelize.STRING,
      },
      grouping: {
        type: Sequelize.STRING,
      },
      noOfFloor: {
        type: Sequelize.INTEGER,
      },
      isFenced: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      parcelId: {
        allowNull: false,
        type: Sequelize.UUIDV4,
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
    await queryInterface.dropTable("Buildings");
  },
};
