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
  
    this.belongsTo(models.UserQuiz, {
       foreignKey: "userQuizId"
       
       });
      //  this.hasOne(models.Question, {
      //  foreignKey: "questionId"
       
      //  });
      //  this.hasOne(models.Choice, {
      //  foreignKey: "choiceId"
       
      //  });
    }
  };
  UserResponse.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userQuizId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'UserQuiz', 
        key: 'id', 
      }
    },
     questionId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'question', 
        key: 'id', 
      }
    },
     choiceId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'choice', 
        key: 'id', 
      }
    },
    
     score:{
      type:DataTypes.INTEGER
    },
    
}, {
    sequelize,
    modelName: 'UserResponse',
  });
  return UserResponse;
};



//  id: UUID,userquizid: UUID,optionid: UUID,response:STRING,score:NUMBER
  
    