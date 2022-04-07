'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parcel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Parcel.init({
    freeAccess: DataTypes.STRING,
    plotOwnership: DataTypes.STRING,
    typeOfEnclosure: DataTypes.STRING,
    doesParcelHaveBuildings: DataTypes.STRING,
    noOfBuildingsWithinEnclosure: DataTypes.STRING,
    isthePlotFenced: DataTypes.STRING,
    connectedtoImoStateWaterBoard: DataTypes.STRING,
    borehole: DataTypes.STRING,
    Sewerage: DataTypes.STRING,
    streetlight: DataTypes.STRING,
    disposalArragement: DataTypes.STRING,
    mast: DataTypes.STRING,
    signage: DataTypes.STRING,
    generator: DataTypes.STRING,
    plotMainUse: DataTypes.INTEGER,
    lga: DataTypes.STRING,
    ward: DataTypes.STRING,
    gridNo: DataTypes.STRING,
    enumerationDate: DataTypes.DATE,
    plot_Address: DataTypes.STRING,
    gridNo: DataTypes.STRING,
    ownerId: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }

  }, {
    sequelize,
    modelName: 'Parcel',
  });
  return Parcel;
};