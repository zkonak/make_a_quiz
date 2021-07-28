const express = require("express");

const { OK, CREATED } = require("../helpers/status_codes");

const {
    getOne,
    
    add
} = require("../controllers/userresponse_controller");

const router = express.Router();



router.get("/:userquizid/:questionId", async (request, response) => {
    const userresponse= await getOne(request.params.userquizid,request.params.questionId);
    response.status(OK).json(userresponse);
});



router.post("/", async (request, response) => {
    const userResponse= request.body;
   
    const newUserResponse = await add(userResponse);
    response.status(CREATED).json(newUserResponse);
});

module.exports = router;
