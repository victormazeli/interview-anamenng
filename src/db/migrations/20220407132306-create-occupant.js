"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Occupants", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      occupantType: {
        type: Sequelize.STRING,
      },
      businessName: {
        type: Sequelize.STRING,
      },
      director: {
        type: Sequelize.STRING,
      },
      cacRegNo: {
        type: Sequelize.STRING,
      },
      cacRegDate: {
        type: Sequelize.STRING,
      },
      IMSSBN: {
        type: Sequelize.STRING,
      },
      JTBTIN: {
        type: Sequelize.STRING,
      },
      buinessTIN: {
        type: Sequelize.STRING,
      },
      typeOfBusiness: {
        type: Sequelize.STRING,
      },
      regType: {
        type: Sequelize.STRING,
      },
      buisnessSize: {
        type: Sequelize.STRING,
      },
      noOfSectorStaff: {
        type: Sequelize.STRING,
      },
      noOfNonCoreStaff: {
        type: Sequelize.STRING,
      },
      taxOffice: {
        type: Sequelize.STRING,
      },
      businessMobility: {
        type: Sequelize.STRING,
      },
      CACStatus: {
        type: Sequelize.STRING,
      },
      regStatus: {
        type: Sequelize.STRING,
      },
      buisnessCategory: {
        type: Sequelize.STRING,
      },
      buisnessSector: {
        type: Sequelize.STRING,
      },
      buinessSubSector: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Occupants");
  },
};
