const express = require("express");
const { getMediumQuiz } = require("../../controllers/quizesControllers/getQuiz/getMediumQuiz");
const { handleSubmitMediumQuiz } = require("../../controllers/quizesControllers/submitQuiz/submitMediumQuiz");
const router = express.Router();
router.get("/:id" , getMediumQuiz);
router.post("/:id" , handleSubmitMediumQuiz);
module.exports = router;