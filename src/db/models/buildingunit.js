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
      this.belongsTo(models.Occupant, {as: 'occupant', foreignKey:'occupantId'})
    }
  }
  BuildingUnit.init({
    floorNumber: DataTypes.INTEGER,
    unitNo: DataTypes.INTEGER,
    unitType: DataTypes.STRING,
    NoOfRooms: DataTypes.INTEGER,
    propertyUse1: DataTypes.INTEGER,
    buildingPurpose: DataTypes.STRING,
    buildingOccupants: DataTypes.STRING,
    howManyOccupants: DataTypes.INTEGER,
    buildingId: {
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    creationDate: DataTypes.STRING,
    editDate: DataTypes.STRING,
    editor: DataTypes.STRING,
    x: DataTypes.STRING,
    y: DataTypes.STRING,
    occupantId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }

  }, {
    sequelize,
    modelName: 'BuildingUnit',
  });
  return BuildingUnit;
};