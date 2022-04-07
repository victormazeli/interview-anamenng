'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BuildingUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BuildingUnit.init({
    floorNumber: DataTypes.INTEGER,
    unitNo: DataTypes.INTEGER,
    unitType: DataTypes.STRING,
    NoOfRooms: DataTypes.INTEGER,
    propertyUse1: DataTypes.INTEGER,
    buildingPurpose: DataTypes.STRING,
    buildingOccupants: DataTypes.INTEGER,
    howManyOccupants: DataTypes.INTEGER,
    buildingId: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    creationDate: DataTypes.DATE,
    editDate: DataTypes.DATE,
    editor: DataTypes.STRING,
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    occupantId: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }

  }, {
    sequelize,
    modelName: 'BuildingUnit',
  });
  return BuildingUnit;
};