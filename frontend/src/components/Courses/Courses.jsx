import { useState, useEffect } from "react";
import Card from "./Card";
import { server } from "../../main";

function Courses() {
  const [courses, setCourses] = useState([]);
  const token=localStorage.getItem("userToken");
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
        console.log(data[1].courseName);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <Card key={course._id} course={course} />
        ))
      ) : (
        <p>Loading courses...</p> // Show a loading message or something similar
      )}
    </div>
  );
}

export default Courses;
