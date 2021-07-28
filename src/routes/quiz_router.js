const express = require("express");
const isAuth = require("../middlewares/isAuth");

const { OK, CREATED } = require("../helpers/status_codes");
const {
  getAll,
  getOne,
  add,
  update,
  getByUser
} = require("../controllers/quiz_controller");

const router = express.Router();

router.get("/", async (request, response) => {
  const quizzes = await getAll();
  response.status(OK).json(quizzes);
});

router.get("/:id", async (request, response) => {
  const quiz = await getOne(request.params.id);
  response.status(OK).json(quiz);
});

router.get("/byuser/:userId", async (request, response) => {
  const quiz = await getByUser(request.params.userId);
  response.status(OK).json(quiz);
});


router.post("/",isAuth, async (request, response) => {
  const quizToAdd = request.body;
  
  const newQuiz = await add(quizToAdd);
  response.status(CREATED).json(newQuiz);
});


router.put("/:id",isAuth, async (request, response) => {
  const user = request.body;

  const userUpdated = await update(request.params.id, user);
  response.status(OK).json(userUpdated);
});



module.exports = router;
