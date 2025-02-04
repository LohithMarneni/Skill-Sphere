import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SubmitQuiz() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { marks, message } = location.state || {};

  // Function to navigate to the Courses page
  const goToCourses = () => {
    navigate('/courses'); // Replace with your actual Courses route
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Quiz Submission</h1>

      {marks !== undefined && message ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold">Marks: {marks}</h2>
          <p className="text-lg mt-4">{message}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">No result to display.</p>
      )}

      {/* Button to navigate to the Courses page */}
      <div className="text-center mt-6">
        <button
          onClick={goToCourses}
          className="bg-black text-white px-6 py-2 rounded hover:bg-black"
        >
          Go to Courses
        </button>
      </div>
    </div>
  );
}

export default SubmitQuiz;
