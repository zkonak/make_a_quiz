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
     this.hasMany(models.UserResponse,{
    foreignKey: "userQuizId",
    });
   this.belongsTo(models.User, {
       foreignKey: "userId"
       
       });
       this.belongsTo(models.Quiz, {
       foreignKey: "quizId"
       
       });
    }
  };
  UserQuiz.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user', 
        key: 'id', 
      }
    },
     quizId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'quiz', 
        key: 'id', 
      }
    },
    
    
    totalscore:{
      type:DataTypes.INTEGER
    },
    
}, {
    sequelize,
    modelName: 'UserQuiz',
  });
  return UserQuiz;
};


 // id:UUID,userid:UUID,quizid:UUID,date:DATE,timespent:NUMBER,termin:STRING,totalscore:NUMBER,timelimit:NUMBER
  