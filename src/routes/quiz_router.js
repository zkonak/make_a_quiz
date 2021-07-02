const express = require("express");
const isAuth = require("../middlewares/isAuth");

const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAll,
  getOne,
  add,
  addPromo
} = require("../controllers/quiz_controller");

const router = express.Router();

router.get("/",isAuth, async (request, response) => {
  const quizzes = await getAll();
  response.status(OK).json(quizzes);
});

router.get("/:id", async (request, response) => {
  const quiz = await getOne(request.params.id);
  response.status(OK).json(quiz);
});


router.post("/", async (request, response) => {
  const quizToAdd = request.body;
  
  const newQuiz = await add(quizToAdd);
  response.status(CREATED).json(newQuiz);
});

module.exports = router;
