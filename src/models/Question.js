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
      this.belongsTo(models.Quiz, {
       foreignKey: "quizId"
       
       });
       
       this.hasMany(models.Choice,{
       foreignKey: "questionId"
       
       });
    }  
  }
  Question.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
     quizId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'quiz', 
        key: 'id', 
      }
    },
   
    question: {
     type: DataTypes.STRING,
     
    },
     score: {
            type: DataTypes.INTEGER
        },


  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};

 //id:UUID,quizid: UUID,type: NUMBER,order:NUMBER,question:STRING,
     

