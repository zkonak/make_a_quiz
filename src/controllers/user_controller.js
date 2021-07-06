const { User } = require("../models");
const { NotFoundError, BadRequestError ,UnauthorizedError} = require("../helpers/errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getEncryptedPassword(password) {
  
  let error,encryptedPassword;

  encryptedPassword =await bcrypt.hash(password,10)
    
    return encryptedPassword;
}



const userController = {
  getAll: async () => {
    const users = await User.findAll({
      order: [["firstname", "ASC"]],
      attributes: {exclude: ["dateCreated"]},
      raw: true,
    });
    return users;
  },

  getOne: async (id) => {
    const user = await User.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
     
    });
    if (!user) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    return user;
  },

   getByUserName: async (username,password) => {
    const user = await User.findOne({
      where: {
        username
      },
      attributes: {exclude: ["dateCreated"]},
     
    });
    if (!user) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    let correct =await bcrypt.compare(password, user.password);
        if(correct){


        const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration
        user.exp=MAXAGE;
        token= await jwt.sign(JSON.stringify(user), "SECRET");
        user.token=token;
          return user;         
    
        }
        else{
          throw new UnauthorizedError("Wrong Password");
        }
              

   
  },

  add: async (data) => {
    const {email,password} = data;
   
    const user = await User.findOne({
      where: {
         email
      }
    });

    if (user) {
      throw new BadRequestError("Ressource existante", "Ce User existe déjà");
    }
    data.password=await getEncryptedPassword(password);
    
    console.log(data.password);
    const newUser = await User.create(data);
    
   
    

    return newUser;
  },

  update: async (id, data) => {
    const userFound = await User.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    await userFound.update(data);

    const user = await User.findOne({
      where: {
        id
      },
      attributes: {exclude: ["dateCreated"]},
    }); 

    return user;
  },

  deleteOne: async (id) => {
    const userFound = await User.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundError("Ressource introuvable", "Ce User n'existe pas");
    }

    await User.destroy({
      where: { id },
    });
  },
};

module.exports = userController;
