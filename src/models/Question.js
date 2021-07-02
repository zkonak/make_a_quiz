'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //this.hasMany(models.Option);
    // this.belongsTo(models.Quiz, {as: 'quiz',  foreignKey: 'quizId' });
    }
  };
  Question.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
     quizid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'quiz', 
        key: 'id', 
      }
    },
    type: {
     type: DataTypes.INTEGER,
     
    },
    order: {
     type: DataTypes.INTEGER,
     
    },
    question: {
     type: DataTypes.STRING,
     
    },

  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};

 //id:UUID,quizid: UUID,type: NUMBER,order:NUMBER,question:STRING,
     

