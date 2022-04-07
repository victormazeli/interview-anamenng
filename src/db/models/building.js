'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Building extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Parcel, {as: "parcel", foreignKey: "parcelId"})
      this.hasMany(models.BuildingUnit, {as: "buildingUnits", foreignKey: "buildingId"})
    }
  }
  Building.init({
    buildingUse: DataTypes.STRING,
    isBuildingForBuisness: DataTypes.STRING,
    buildingTagNo: DataTypes.INTEGER,
    buildingSerialNo: DataTypes.INTEGER,
    estateName: DataTypes.STRING,
    buildingStatus: DataTypes.STRING,
    knowyearOfCompletion: DataTypes.STRING,
    yearOfCompletion: DataTypes.STRING,
    approximateAge: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    buildingType: DataTypes.STRING,
    arrangement: DataTypes.STRING,
    roofCovering: DataTypes.STRING,
    mainWallMaterial: DataTypes.STRING,
    grouping: DataTypes.STRING,
    noOfFloor: DataTypes.INTEGER,
    isFenced: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    parcelId: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'Building',
  });
  return Building;
};