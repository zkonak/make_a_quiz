const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAll,
  getOne,
  getByUserName,
  add,
  deleteOne,
  update,
} = require("../controllers/user_controller");
const { ValidationError } = require("../helpers/errors");

const router = express.Router();

router.get("/getAll", async (request, response) => {
  const users = await getAll();
  response.status(OK).json(users)
});

router.post("/", async (request, response) => {
  const user = request.body;

  const newUser = await add(user);
  response.status(CREATED).json(newUser);
});

router.get("/:id", async (request, response) => {
  const user = await getOne(request.params.id);
  response.status(OK).json(user);
});

router.get("/:username/:password", async (request, response) => {
  const user = await getByUserName(request.params.username,request.params.password);
   const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration
  response.cookie('authcookie', user.token, { maxAge: MAXAGE });
  console.log(user);

  response.status(OK).json({user:user,token:user.token});
});

router.put("/:id", async (request, response) => {
  const user = request.body;

  const userUpdated = await update(request.params.id, user);
  response.status(OK).json(userUpdated);
});

router.delete("/:id", async (request, response) => {
  await deleteOne(request.params.id);
  response.status(OK).json({ message: "L'user est supprimé avec succès" });
});

module.exports = router;
