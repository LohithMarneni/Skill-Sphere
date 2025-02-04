import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "../../main";

function GetQuiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const quizData = location.state?.quiz; // Get quiz data passed via state

  // State to store selected answers
  const [answers, setAnswers] = useState({});

  // Handle answer selection
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken"); 

    // Assuming we get quiz type from somewhere (easy, medium, hard)
    const quizType = "easy"; // This could be dynamic based on the quiz type

    // Send the answers to the server
    try {
      const response = await fetch(`${server}${quizType}Quiz/${quizData._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Replace with actual token
        },
        body: JSON.stringify({
          userAnswers: Object.values(answers),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Redirect to SubmitQuiz page with marks and message
        navigate('/submitQuiz', { state: { marks: data.marks, message: data.message } });
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Error submitting quiz');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Quiz</h1>

      {quizData ? (
        <form onSubmit={handleSubmit}>
          {quizData.questions.map((question, index) => (
            <div key={question._id} className="mb-6">
              <h2 className="text-xl font-semibold">{index + 1}. {question.questionText}</h2>
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <label key={idx} className="block">
                    <input
                      type="radio"
                      name={`question-${question._id}`}
                      value={option}
                      checked={answers[question._id] === option}
                      onChange={() => handleAnswerChange(question._id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded mt-6"
          >
            Submit Quiz
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-500">No quiz available</p>
      )}
    </div>
  );
}

export default GetQuiz;
