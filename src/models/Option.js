const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Option extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
           // this.belongsTo(models.Quiz, {foreignKey: 'quizId'});
          
        }
    };
    Option.init({
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
          questionid: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'question', 
              key: 'id', 
             }
        },
        option: {
            type: DataTypes.STRING
        },
         correct: {
            type: DataTypes.STRING
        },
         score: {
            type: DataTypes.INTEGER
        },

    }, {
        sequelize,
        modelName: 'Option',
    });
    return Option;
};
//  id: UUID,questionid:UUID,option:STRING,correct:STRING,score:NUMBER
        