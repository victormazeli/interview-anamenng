'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owner.init({
    ownerType: DataTypes.STRING,
    firstName: DataTypes.STRING,
    surname: DataTypes.STRING,
    otherNames: DataTypes.STRING,
    fullName: DataTypes.STRING,
    occupation: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    alternativePhoneNo: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    ward1: DataTypes.STRING,
    lga1: DataTypes.STRING,
    state1: DataTypes.STRING,
    businessName: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};