"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Owners", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      ownerType: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      otherNames: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      address1: {
        type: Sequelize.STRING,
      },
      address2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      alternativePhoneNo: {
        type: Sequelize.INTEGER,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      lga1: {
        type: Sequelize.STRING,
      },
      state1: {
        type: Sequelize.STRING,
      },
      businessName: {
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
    await queryInterface.dropTable("Owners");
  },
};
