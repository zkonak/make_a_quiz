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
      //this.belongsTo(models.User, {as: 'quiz', foreignKey: 'userId'});
      //this.hasMany(models.Question);
    }
  };
  Quiz.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING
    },
    userid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'user', 
        key: 'id', 
      }
    },
    datecreation: {
      type: DataTypes.DATE
    },
    active: {
      type: DataTypes.STRING
    },
    fontcolor:{
      type:DataTypes.STRING
    },
    backgroundimage:{
      type:DataTypes.BLOB
    },
    icon:{
      type:DataTypes.BLOB
    },
    public:{
      type:DataTypes.STRING
    },
    scoremin:{
      type:DataTypes.INTEGER
    },
    timelimit:{
      type:DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};


// id:UUID,title:STRING,userid:UUID,datecreation:DATE,active:STRING,fontcolor:STRING,backgroundimage:BLOB,icon:BLOB,public:STRING,scoremin:NUMBER,timelimit:NUMBER
    