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
     // this.belongsToMany(models.UserQuiz, {as: 'userResponse', through: 'userResponse', foreignKey: 'userQuizId'})
    }
  };
  UserResponse.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userquizid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'userquiz', 
        key: 'id', 
      }
    },
     optionid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'option', 
        key: 'id', 
      }
    },
    
    response:{
      type:DataTypes.STRING
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
  
    