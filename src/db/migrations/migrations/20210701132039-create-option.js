'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Choices', {
      id: {
          allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn("uuid_generate_v4"),
      },
      
      questionid: {
        type: Sequelize.UUID,
         references: {
          model: "questions",
          key: "id",
        },
      },
      choice: {
        type: Sequelize.STRING
      },
      correct: {
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
    await queryInterface.dropTable('Choices');
  }
};