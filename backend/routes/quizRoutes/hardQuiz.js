const express = require("express");
const { getHardQuiz } = require("../../controllers/quizesControllers/getQuiz/getHardQuiz");
const { handleSubmitHardQuiz } = require("../../controllers/quizesControllers/submitQuiz/submitHardQuiz");
const router = express.Router();
router.get("/:id" , getHardQuiz);
router.post("/:id" , handleSubmitHardQuiz);
module.exports = router;