const { UserResponse } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");


const userResponseController = {
    
    getByUserQuiz: async (userQuizId) => {
        const userResponse = await UserResponse.findOne({
            where: {
                userQuizId
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
        if (!userResponse) {
            throw new NotFoundError("Ressource introuvable", "Ces responses n'existent pas");
        }

        return userResponse;
    },
    add: async (data) => {
     
     

        const newUserResponse= await UserResponse.create(data);

        return newUserResponse;
    },
};

module.exports = userResponseController;
