const { UserQuiz } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");


const userQuizController = {
    getAll: async () => {
        const userquizzes = await UserQuiz.findAll({
            order: [["date", "DESC"]],
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
        const userquiz = await UserQuiz.findOne({
            where: {
                userid
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
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
