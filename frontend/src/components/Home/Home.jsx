import { useNavigate } from "react-router-dom";

import Card from "./Card";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("userToken") ? true : false
  );

  return (
    <div className="w-full min-h-screen bg-gray-100 ">
      {/* First Section: Hero */}
      <div className="w-full min-h-[calc(100vh-50px)] flex items-center justify-center bg-gray-100 ">
        {/* Left Section - Text Content */}
        <div className="w-1/2 flex flex-col items-start justify-center px-10">
          <h1 className="text-5xl font-bold text-black leading-tight">
            Welcome to Skill Sphere
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Your gateway for Skill Building and Career Advancement Roadmap.
          </p>
        <button
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
            onClick={() => navigate("/login")}
          >
           Get Started
          </button>
          
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/Home_page_Image.jpeg"
            alt="Career Roadmap"
            className="w-full h-auto max-h-[565px] object-cover rounded-sm shadow-lg "
          />
        </div>
      </div>

      {/* Additional Sections Below */}
      <div className="py-16 bg-gray-50">
        {/* Why Choose Skill Sphere */}
        <div className="p-4 flex justify-center items-center">
          <p className="font-extrabold p-2 text-3xl text-black">Why Choose Skill Sphere</p>
        </div>
        <div className="flex justify-between items-center px-30">
          <Card heading="Personalized Learning" text="AI-crafted roadmaps for any topic." />
          <Card heading="Expert Resources" text="High-quality tutorials and articles." />
          <Card heading="Gamified Quizzes" text="Easy, Medium, and Hard levels." />
        </div>
      </div>

      <div className="py-16">
        {/* Key Features */}
        <div className="p-4 flex justify-center items-center">
          <p className="font-extrabold p-2 text-3xl text-black">Key Features</p>
        </div>
        <div className="flex justify-between items-center px-30">
          <Card heading="Tailored learning paths for every user." text="" />
          <Card heading="Trusted resources from expert sources." text="" />
          <Card heading="Interactive quizzes to track progress." text="" />
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        {/* Our Impact */}
        <div className="p-4 flex justify-center items-center">
          <p className="font-extrabold p-2 text-3xl text-black">Our Impact</p>
        </div>
        <div className="flex justify-between items-center px-30">
          <Card heading="Faster Learning" text="Structured guidance for quick mastery." />
          <Card heading="For Everyone" text="Students, professionals, and hobbyists." />
          <Card heading="Confidence Boost" text="Achieve goals step-by-step." />
        </div>
      </div>

      <div className="py-16">
        {/* Use Cases */}
        <div className="p-4 flex justify-center items-center">
          <p className="font-extrabold p-2 text-3xl text-black">Use Cases</p>
        </div>
        <div className="flex justify-between items-center px-30">
          <Card heading="Grow your career with new skills." text="" />
          <Card heading="Excel academically with clear roadmaps." text="" />
          <Card heading="Learn new hobbies with structured plans." text="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
