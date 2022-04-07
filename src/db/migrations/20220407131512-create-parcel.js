"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Parcels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      freeAccess: {
        type: Sequelize.STRING,
      },
      plotOwnership: {
        type: Sequelize.STRING,
      },
      typeOfEnclosure: {
        type: Sequelize.STRING,
      },
      doesParcelHaveBuildings: {
        type: Sequelize.STRING,
      },
      noOfBuildingsWithinEnclosure: {
        type: Sequelize.STRING,
      },
      isthePlotFenced: {
        type: Sequelize.STRING,
      },
      connectedtoImoStateWaterBoard: {
        type: Sequelize.STRING,
      },
      borehole: {
        type: Sequelize.STRING,
      },
      Sewerage: {
        type: Sequelize.STRING,
      },
      streetlight: {
        type: Sequelize.STRING,
      },
      disposalArragement: {
        type: Sequelize.STRING,
      },
      mast: {
        type: Sequelize.STRING,
      },
      signage: {
        type: Sequelize.STRING,
      },
      generator: {
        type: Sequelize.STRING,
      },
      plotMainUse: {
        type: Sequelize.INTEGER,
      },
      lga: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },
      gridNo: {
        type: Sequelize.STRING,
      },
      enumerationDate: {
        type: Sequelize.DATE,
      },
      plot_Address: {
        type: Sequelize.STRING,
      },
      gridNo: {
        type: Sequelize.DATE,
      },
      ownerId: {
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
    await queryInterface.dropTable("Parcels");
  },
};
