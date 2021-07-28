const {Choice } = require("../models");
const { BadRequestError, NotFoundError } = require("../helpers/errors");


const choiceController = {
    getAll: async () => {
        const choices = await Choice.findAll({
            order: [["id", "ASC"]],
            attributes: { exclude: ["createdAt", "updatedAt"] },
            raw: true,
        });
        return options;
    },
    getOne: async (id) => {
       const choice = await Choice.findAll({
            where: {
                id
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          
        });
        if (!choice) {
            throw new NotFoundError("Ressource introuvable", "Cette option n'existe pas");
        }

        return choice;
    },
    getCorrectOne: async (questionid) => {
       const choice = await Choice.findAll({
            where: {
                id,questionId
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          
        });
        if (!choice) {
            throw new NotFoundError("Ressource introuvable", "Cette option n'existe pas");
        }

        return choice;
    },
  
    getByQuestion: async (questionId) => {
        const choices = await Choice.findAll({
            where: {
                questionId
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          
        });
        if (!choices) {
            throw new NotFoundError("Ressource introuvable", "Cette options n'existe pas");
        }

        return choices;
    },
  
    add: async (data) => {
    
        const newChoice = await Choice.create(data);

        return newChoice;
    },
    update: async (id, data) => {
    const optionFound = await Choice.findOne({
      where: { id },
    });
    if (!optionFound) {
      throw new NotFoundError("Ressource introuvable", "Cette option n'existe pas");
    }
   
    await optionFound.update(data);

    const option = await Choice.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    return option;
  },
   deleteOption: async (id, data) => {
    const optionFound = await Choice.findOne({
      where: { id },
    });
    if (!optionFound) {
      throw new NotFoundError("Ressource introuvable", "Cette option n'existe pas");
    }
   
    await optionFound.delete();

    return optionFound;
  },
};

module.exports = choiceController;
