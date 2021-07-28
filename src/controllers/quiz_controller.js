const { Quiz } = require("../models");
const { BadRequestError, NotFoundError,UnauthorizedError } = require("../helpers/errors");

const quizController = {
  getAll: async () => {
    const quizzes = await Quiz.findAll({
      order: [["createdAt", "DESC"]],
      attributes: { exclude: [ "updatedAt"] },
      raw: true,
      include:"User"
    });
    return quizzes;
  },
  getByUser: async (userId) => {
    const quizzes = await Quiz.findAll({
      where:{
         userId
      },
      order: [["createdAt", "DESC"]],
      attributes: { exclude: [ "updatedAt"] },
      raw: true,
      include:"User"
    });
    console.log(quizzes);
    return quizzes;
  },
  getOne: async (id) => {
    const quiz = await Quiz.findOne({
      where: {
        id
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      
      
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
     console.log(data)
    const newQuiz = await Quiz.create(data);
    //newQuiz.addOption(data.option);

    return newQuiz;
  },

  update: async (id, data,user_id) => {
    const quizFound = await Quiz.findOne({
      where: { id },
    });
    if (!quizFound) {
      throw new NotFoundError("Ressource introuvable", "Ce Quiz n'existe pas");
    }
    if (quizFound.userId!==user_id) {
      throw new UnauthorizedError("Ressource inaccesible!");
    }


    await quizFound.update(data);

    const quiz = await Quiz.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    return quiz;
  },
 
};

module.exports =quizController;
