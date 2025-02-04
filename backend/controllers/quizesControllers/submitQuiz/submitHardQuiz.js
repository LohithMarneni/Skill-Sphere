const hardQuiz = require("../../../model/hardQuiz.model");
const handleSubmitHardQuiz = async (req, res) => {
  try {
    const quizId = req.params.id;
    const userAnswers = req.body.userAnswers;
    const quiz = await hardQuiz.findById(quizId).exec();
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    if (quiz.isAttempted) {
      return res
        .status(400)
        .json({ message: "Quiz has already been attempted" });
    }
    let marks = 0;
    quiz.questions.forEach((question, index) => {
      if (userAnswers[index] && userAnswers[index] === question.answer) {
        marks += 1;
      }
    });
    // Update the quiz document in the database
    quiz.isAttempted = true;
    quiz.marks = marks;
    await quiz.save();
    res.status(200).json({
      message: "Quiz submitted successfully",
      marks,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
module.exports = { handleSubmitHardQuiz };
