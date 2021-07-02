'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserResponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserResponse.init({
    id: DataTypes.UUID,
    userquizid: DataTypes.UUID,
    optionid: DataTypes.UUID,
    response: DataTypes.STRING,
    score: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UserResponse',
  });
  return UserResponse;
};