const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAll,
  getOne,
  add,
} = require("../controllers/question_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  const questions = await getAll();
  response.status(OK).json(questions);
  });


router.get("/:id", async (request, response) => {
  const question = await getOne(request.params.id);
  response.status(OK).json(question);
});

router.post("/", async (request, response) => {
  const question = request.body;

  const newQuestion = await add(question);
  response.status(CREATED).json(newQuestion);
});

module.exports = router;
