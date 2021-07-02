'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quiz.init({
    id: DataTypes.UUID,
    title: DataTypes.STRING,
    userid: DataTypes.UUID,
    datecreation: DataTypes.DATE,
    active: DataTypes.STRING,
    fontcolor: DataTypes.STRING,
    backgroundimage: DataTypes.BLOB,
    icon: DataTypes.BLOB,
    public: DataTypes.STRING,
    scoremin: DataTypes.NUMBER,
    timelimit: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};