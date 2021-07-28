const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
    getAll,
    getOne,
    getByUser,
    getByQuiz,
    add
} = require("../controllers/userquiz_controller");

const router = express.Router();

router.get("/getAll/:id", async (request, response) => {
    const userquiz = await getAll(request.params.id);
    response.status(OK).json(userquiz);
});
router.get("/byuser/:userId", async (request, response) => {
    const userquiz = await getByUser(request.params.userId);
    response.status(OK).json(userquiz);
});
router.get("/byquiz/:quizId", async (request, response) => {
    const userquiz = await getByQuiz(request.params.quizId);
    response.status(OK).json(userquiz);
});

router.get("/:id", async (request, response) => {
    const userquiz = await getOne(request.params.id);
    response.status(OK).json(userquiz);
});

// router.get("/:userid", async (request, response) => {
//     const userquiz = await getByUser(request.params.id);
//     response.status(OK).json(userquiz);
// });

router.post("/", async (request, response) => {
    const userquiz = request.body;

    const newUserQuiz = await add(userquiz);
    response.status(CREATED).json(newUserQuiz);
});

module.exports = router;
