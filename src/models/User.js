const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //this.hasMany(models.Quiz);
      //this.belongsToMany(models.UserQuiz, {as: 'userQuiz', through: 'userQuiz', foreignKey: 'userId'});
    }
  };
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
     username:{
       type:DataTypes.STRING
    },
     email:{
       type:DataTypes.STRING
    },
     password:{
       type:DataTypes.STRING
    },
     datecreation:{
       type:DataTypes.DATE
    },
     confimed:{
       type:DataTypes.STRING
    },
  },
   {
    sequelize,
    modelName: 'User',
  });
  return User;
};


   //id:UUID,firstname:STRING,lastname:STRING,username:STRING,email:STRING,password:STRING,datecreation:DATE,confimed:STRING
  
  