const { Question } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");


const questionController = {
  getAll: async () => {
    const questions = await Question.findAll({
      order: [["order", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
      raw: true,
    });
    return questions;
  },
  getOne: async (id) => {
    const question = await Question.findOne({
      where: {
        id
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: ['quizzes']
    });
    if (!question) {
      throw new NotFoundError("Ressource introuvable", "Cette question n'existe pas");
    }

    return promo;
  },
  add: async (data) => {
   

    const newQuestion = await Question.create(data);

    return newQuestion;
  },
};

module.exports = questionController;
