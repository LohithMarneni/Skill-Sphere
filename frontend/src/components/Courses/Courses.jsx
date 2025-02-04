import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Card from "./Card";
import { server } from "../../main";

function Courses() {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(server + "course", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setCourses(data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl ml-130 font-semibold text-center mb-8 text-black flex justify-between items-center">
        <span>Available Courses</span>
        <button
          onClick={() => navigate("/addCourse")} // Navigate to CreateCourse component
          className="bg-black text-white text-lg px-3 py-1 rounded"
        >
          Create course
        </button>
      </h1>

      {courses && courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Card key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading courses...</p>
      )}
    </div>
  );
}

export default Courses;
