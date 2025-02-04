import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { server } from "../../main";

function CreateCourse() {
  const [courseName, setCourseName] = useState("");
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseName) {
      alert("Please enter a course name");
      return;
    }

    try {
      const response = await fetch(server + "course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseName }),
      });

      if (response.ok) {
        console.log(response);
        // Redirect back to Courses page after successful submission
        navigate("/courses");
      } else {
        console.error("Error creating course");
      }
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8 text-black">
        Create a New Course
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="courseName">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-3 border border-black rounded"
            placeholder="Enter course name"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCourse;
