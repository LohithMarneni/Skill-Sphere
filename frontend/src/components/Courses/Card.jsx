import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation (optional)
import { server } from "../../main";

function Card(props) {
  const course = props.course;
  const token = localStorage.getItem("userToken"); // Get the token
  const navigate = useNavigate();

  const getQuiz = async (quizType) => {
    const url = `${server}${quizType}Quiz/${course._id}`; // Construct the URL
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token for authorization
        },
      });
      const data = await response.json(); // Parse the JSON response

      // If quiz data is returned, you can navigate to a new page or display it
      if (data) {
        console.log("Quiz data:", data);
        // For example, navigate to a quiz page with the quiz data (optional)
        // navigate(`/quiz/${course._id}`, { state: { quiz: data } });
        navigate(`/getQuiz`, { state: { quiz: data } });
      } else {
        console.error("No quiz data found");
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        {course.courseName}
      </h2>

      <div className="space-y-3 mb-6">
        {course.resources.map((resource) => (
          <a
            key={resource._id}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
          >
            <p className="text-gray-600">{resource.description}</p>
            <p className="text-sm text-black font-medium underline m-1">Link</p>
          </a>
        ))}
      </div>

      <div className="quizOption flex space-x-4">
        <button
          onClick={() => getQuiz("easy")}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Easy
        </button>
        <button
          onClick={() => getQuiz("medium")}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Medium
        </button>
        <button
          onClick={() => getQuiz("hard")}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default Card;
