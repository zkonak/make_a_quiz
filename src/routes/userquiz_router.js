const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
    getAll,
    getOne,
    getByUser,
    add
} = require("../controllers/userquiz_controller");

const router = express.Router();

router.get("/", async (request, response) => {
    const userquiz = await getAll();
    response.status(OK).json(userquiz);
});

router.get("/:id", async (request, response) => {
    const userquiz = await getOne(request.params.id);
    response.status(OK).json(userquiz);
});

router.get("/:userid", async (request, response) => {
    const userquiz = await getByUser(request.params.id);
    response.status(OK).json(userquiz);
});

router.post("/", async (request, response) => {
    const userquiz = request.body;

    const newUserQuiz = await add(userquiz);
    response.status(CREATED).json(newUserQuiz);
});

module.exports = router;
