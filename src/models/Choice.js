const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Choice extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
          
            this.belongsTo(models.Question, {
            foreignKey: "questionId"
       
       });
          
        }
    };
    Choice.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
          questionId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'question', 
              key: 'id', 
             }
        },
        choice: {
            type: DataTypes.STRING
        },
         correct: {
            type: DataTypes.INTEGER
        },
        
    }, {
        sequelize,
        modelName: 'Choice',
    });
    return Choice;
};
//  id: UUID,questionid:UUID,option:STRING,correct:STRING,score:NUMBER
        