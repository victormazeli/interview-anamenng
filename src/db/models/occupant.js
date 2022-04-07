'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Occupant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.BuildingUnit, {as: 'buildingUnit', foreignKey:'occupantId'})
    }
  }
  Occupant.init({
    occupantType: DataTypes.STRING,
    businessName: DataTypes.STRING,
    director: DataTypes.STRING,
    cacRegNo: DataTypes.STRING,
    cacRegDate: DataTypes.STRING,
    IMSSBN: DataTypes.STRING,
    JTBTIN: DataTypes.STRING,
    buinessTIN: DataTypes.STRING,
    typeOfBusiness: DataTypes.STRING,
    regType: DataTypes.STRING,
    buisnessSize: DataTypes.STRING,
    noOfSectorStaff: DataTypes.STRING,
    noOfNonCoreStaff: DataTypes.STRING,
    taxOffice: DataTypes.STRING,
    businessMobility: DataTypes.STRING,
    CACStatus: DataTypes.STRING,
    regStatus: DataTypes.STRING,
    buisnessCategory: DataTypes.STRING,
    buisnessSector: DataTypes.STRING,
    buinessSubSector: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Occupant',
  });
  return Occupant;
};