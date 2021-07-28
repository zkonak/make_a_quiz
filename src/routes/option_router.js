const express = require("express");
const isAuth =require("../middlewares/isAuth");
const { OK, CREATED } = require("../helpers/status_codes");

const {getOne,getByQuestion,add,update,deleteOption} = require("../controllers/choice_controller");

const router = express.Router();



router.get("/question/:question_id",isAuth, async (request, response) => {
    const options = await getByQuestion(request.params.question_id);
    response.status(OK).json(options);
});

router.get("/:option_id", isAuth,async (request, response) => {
    const option = await getOne(request.params.option_id);
    response.status(OK).json(option);
});



router.post("/",isAuth, async (request, response) => {
    const option = request.body;

    const newOption = await add(option);
    response.status(CREATED).json(newOption);
});

router.put("/:id",isAuth, async (request, response) => {
  const option = request.body;

  const optionUpdated = await update(request.params.id, option);
  response.status(OK).json(optionUpdated);
});

 router.delete("/:id", async (request, response) => {
   await delete(request.params.id);
   response.status(OK).json({ message: "la question est supprimé avec succès" });
});


module.exports = router;
