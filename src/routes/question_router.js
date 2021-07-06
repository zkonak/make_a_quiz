const express = require("express");
const isAuth=require("../middlewares/isAuth");
const { OK, CREATED } = require("../helpers/status_codes");

const {
  getAll,
  getOne,
  add,
  getByQuizId,
  update
} = require("../controllers/question_controller");

const router = express.Router();

// router.get("/", async (request, response) => {
//   const questions = await getAll();
//   response.status(OK).json(questions);
//   });


router.get("/:id", isAuth,async (request, response) => {
  const question = await getOne(request.params.id);
  response.status(OK).json(question);
});
router.get("/quiz/:id", isAuth,async (request, response) => {
  const question = await getByQuizId(request.params.id);
  response.status(OK).json(question);
});


router.post("/", isAuth,async (request, response) => {
  const question = request.body;

  const newQuestion = await add(question);
  response.status(CREATED).json(newQuestion);
});


router.put("/:id",isAuth, async (request, response) => {
  const question = request.body;

  const questionUpdated = await update(request.params.id, question);
  response.status(OK).json(questionUpdated);
});

 router.delete("/:id", async (request, response) => {
   await delete(request.params.id);
   response.status(OK).json({ message: "la question est supprimé avec succès" });
});



module.exports = router;
