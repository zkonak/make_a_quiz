'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserQuiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserQuiz.init({
    id: DataTypes.UUID,
    userid: DataTypes.UUID,
    quizid: DataTypes.UUID,
    date: DataTypes.DATE,
    timespent: DataTypes.NUMBER,
    termin: DataTypes.STRING,
    totalscore: DataTypes.NUMBER,
    timelimit: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UserQuiz',
  });
  return UserQuiz;
};