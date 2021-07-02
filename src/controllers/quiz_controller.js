const { Quiz } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");

const quizController = {
  getAll: async () => {
    const quizzes = await Quiz.findAll({
      order: [["title", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] },
      raw: true,
    });
    return quizzes;
  },
  getOne: async (id) => {
    const quiz = await Quiz.findOne({
      where: {
        id
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: 'users'
    });
    if (!quiz) {
      throw new NotFoundError("Ressource introuvable", "Ce quiz n'existe pas");
    }

    return quiz;
  },
  add: async (data) => {
    const {firstname, lastname, promo_id} = data;

    // const quiz = await Quiz.findOne({
    //   where: {
    //     firstname,
    //     lastname
    //   },
    //   attributes: {exclude: ['PromoId']}
    // });

    // if (formateur) {
    //   throw new BadRequestError("Ressource existante", "Le Formateur existe déjà");
    // }

    const newQuiz = await Quiz.create(data);
    //newQuiz.addOption(data.option);

    return newQuiz;
  },
 
};

module.exports =quizController;
