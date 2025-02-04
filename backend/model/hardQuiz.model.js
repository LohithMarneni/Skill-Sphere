const mongoose = require("mongoose");
const hardQuizSchema = new mongoose.Schema({
  questions: [
    {
      questionText: {
        type: String,
      },
      options: [{ type: String }],
      answer: { type: String },
    },
  ],
  isAttempted: { type: Boolean, default: false },
  marks: { type: Number, default: 0 },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

module.exports = mongoose.model("hardQuiz", hardQuizSchema);
