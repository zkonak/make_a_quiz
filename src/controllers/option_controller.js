const {Option } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");


const optionsController = {
    getAll: async () => {
        const options = await Option.findAll({
            order: [["id", "ASC"]],
            attributes: { exclude: ["createdAt", "updatedAt"] },
            raw: true,
        });
        return options;
    },
    getOne: async (id) => {
       const option = await Option.findAll({
            where: {
                id
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          
        });
        if (!option) {
            throw new NotFoundError("Ressource introuvable", "Cette option n'existe pas");
        }

        return option;
    },
  
    getByQuestion: async (questionId) => {
        const options = await Option.findAll({
            where: {
                questionId
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          
        });
        if (!options) {
            throw new NotFoundError("Ressource introuvable", "Cette options n'existe pas");
        }

        return options;
    },
  
    add: async (data) => {
    
        const newOption = await newOption.create(data);

        return newOption;
    },
};

module.exports = optionsController;
