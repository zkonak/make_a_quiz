const express = require("express");
require("express-async-errors");

const userRouter = require("./user_router");
const quizRouter = require("./quiz_router");
const questionRouter = require("./question_router");
const optionRouter = require('./option_router');
const userQuizRouter = require('./userquiz_router');
const userResponseRouter = require('./userresponse_router');

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/quiz", quizRouter);
mainRouter.use("/question", questionRouter);
mainRouter.use("/option", optionRouter);
mainRouter.use("/userquiz", userQuizRouter);
mainRouter.use("/userresponse", userResponseRouter);

module.exports = mainRouter;
