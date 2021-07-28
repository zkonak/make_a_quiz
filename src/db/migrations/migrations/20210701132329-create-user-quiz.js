'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserQuizzes', {
      id: {
         allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn("uuid_generate_v4"),
      },
      
      userid: {
        type: Sequelize.UUID,
         references: {
          model: "users",
          key: "id",
        },
      },
      quizid: {
        type: Sequelize.UUID,
         references: {
          model: "quizzes",
          key: "id",
        },
      },
     
      totalscore: {
        type: Sequelize.INTEGER
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserQuizzes');
  }
};