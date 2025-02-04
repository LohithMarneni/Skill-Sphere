const express = require("express");
const { getEasyQuiz } = require("../../controllers/quizesControllers/getQuiz/getEasyQuiz");
const { handleSubmitEasyQuiz } = require("../../controllers/quizesControllers/submitQuiz/submitEasyQuiz");
const router = express.Router();
router.get("/:id" , getEasyQuiz);
router.post("/:id" , handleSubmitEasyQuiz);
module.exports = router;