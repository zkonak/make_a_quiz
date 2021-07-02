const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
    getByUserQuiz,
    
    add
} = require("../controllers/userresponse_controller");

const router = express.Router();



router.get("/:userquizid", async (request, response) => {
    const userresponse= await getByUserQuiz(request.params.id);
    response.status(OK).json(userresponse);
});



router.post("/", async (request, response) => {
    const userresponse= request.body;

    const newUserResponse = await add(userResponse);
    response.status(CREATED).json(newUserResponse);
});

module.exports = router;
