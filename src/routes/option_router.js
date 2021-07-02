const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
    getAll,
    getOne,
    getByQuestion,
    add
} = require("../controllers/option_controller");

const router = express.Router();



router.get("/option/:question_id", async (request, response) => {
    const options = await getByQuestion(request.params.question_id);
    response.status(OK).json(options);
});

router.get("/option/:option_id", async (request, response) => {
    const option = await getOne(request.params.option_id);
    response.status(OK).json(option);
});



router.post("/", async (request, response) => {
    const option = request.body;

    const newOption = await add(option);
    response.status(CREATED).json(newOption);
});

module.exports = router;
