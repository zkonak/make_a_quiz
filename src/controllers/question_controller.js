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

    return question;
  },
  getByQuizId: async (id) => {
    const question = await Question.findAll({
      where: {
        quizId:id
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      
    });
    if (!question) {
      throw new NotFoundError("Ressource introuvable", "Cette question n'existe pas");
    }

    return question;
  },
  add: async (data) => {
   

    const newQuestion = await Question.create(data);

    return newQuestion;
  },

  update: async (id, data,user_id) => {
    const questionFound = await Question.findOne({
      where: { id },
    });
    if (!questionFound) {
      throw new NotFoundError("Ressource introuvable", "Ce question n'existe pas");
    }
   
    await questionFound.update(data);

    const question = await Question.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    return question;
  },
   delete: async (id, data) => {
    const questionFound = await Question.findOne({
      where: { id },
    });
    if (!questionFound) {
      throw new NotFoundError("Ressource introuvable", "Ce question n'existe pas");
    }
   
    await questionFound.delete();

    return questionFound;
  },
};

module.exports = questionController;
