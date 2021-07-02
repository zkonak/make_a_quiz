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
     // this.belongsToMany(models.User, {as: 'userQ', through: 'userQuiz', foreignKey: 'userId'});
      //this.belongsToMany(models.Quiz, {as: 'userQuiz', through: 'userQuiz', foreignKey: 'quizId'});
   //   this.hasMany(models.UserResponse);
    }
  };
  UserQuiz.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user', 
        key: 'id', 
      }
    },
     quizid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'quiz', 
        key: 'id', 
      }
    },
    date: {
      type: DataTypes.DATE
    },
    timespent: {
      type: DataTypes.INTEGER
    },
    termin:{
      type:DataTypes.STRING
    },
    totalscore:{
      type:DataTypes.INTEGER
    },
    timelimit:{
      type:DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'UserQuiz',
  });
  return UserQuiz;
};


 // id:UUID,userid:UUID,quizid:UUID,date:DATE,timespent:NUMBER,termin:STRING,totalscore:NUMBER,timelimit:NUMBER
  