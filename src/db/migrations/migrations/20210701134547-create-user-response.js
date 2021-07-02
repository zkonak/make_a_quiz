'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserResponses', {
      id: {
          allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn("uuid_generate_v4"),
      },
      
      userquizid: {
        type: Sequelize.UUID,
         references: {
          model: "userquizzes",
          key: "id",
        },
      },
      optionid: {
        type: Sequelize.UUID,
         references: {
          model: "options",
          key: "id",
        },
      },
      response: {
        type: Sequelize.STRING
      },
      score: {
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
    await queryInterface.dropTable('UserResponses');
  }
};