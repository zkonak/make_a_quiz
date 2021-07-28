const { UserQuiz } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");


const userQuizController = {
    getAll: async (quizid) => {
        const userquizzes = await UserQuiz.findAll({
             where: {
                quizid
            },
            
            attributes: { exclude: ["createdAt", "updatedAt"] },
            raw: true,
        });
        return userquizzes;
    },
    getOne: async (id) => {
        const userquiz = await UserQuiz.findOne({
            where: {
                id
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            
        });
        if (!userquiz) {
            throw new NotFoundError("Ressource introuvable", "Cette quiz n'existe pas");
        }

        return userquiz;
    },
     getByUser: async (userid) => {
        const userquiz = await UserQuiz.findAll({
            where: {
                userid
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include:["Quiz"]
        });
        if (!userquiz) {
            throw new NotFoundError("Ressource introuvable", "Cette quiz n'existe pas");
        }

        return userquiz;
    },
      getByQuiz: async (quizid) => {
        const userquiz = await UserQuiz.findAll({
            where: {
                quizid
            },
           
           
            include:["User"]
        });
        if (!userquiz) {
            throw new NotFoundError("Ressource introuvable", "Cette quiz n'existe pas");
        }

        return userquiz;
    },
    add: async (data) => {
     
      
         
        const newUserQuiz= await UserQuiz.create(data);

        return newUserQuiz;
    },
};

module.exports = userQuizController;
