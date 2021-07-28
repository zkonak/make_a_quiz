'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Quizzes', {
      id: {
         allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn("uuid_generate_v4"),
      },
      title: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id"
        },
      },
      
      fontcolor: {
        type: Sequelize.STRING,
      },
      backgroundcolor: {
        type: Sequelize.STRING,
      },
     
      
      scoremin: {
        type: Sequelize.INTEGER,
      },

      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Quizzes');
  }
};