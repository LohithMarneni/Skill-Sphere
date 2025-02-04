import React from 'react';

function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-6">
      <div className="bg-white shadow-xl rounded-lg max-w-4xl w-full p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">About Us</h2>
        <div className="text-gray-700">
          <p className="text-lg mb-4">
            We are a group of students from SRM AP University, and this project is a part of SRMAP TechEXPO 2025. 
            We have developed a platform called Skill Sphere, which is designed to help users navigate and build a roadmap 
            of the skills needed for various career paths.
          </p>
          <p className="text-lg mb-4">
            Our goal with Skill Sphere is to provide a comprehensive, user-friendly tool that guides individuals in identifying 
            the essential skills for their desired careers, and how to systematically achieve mastery in those skills.
          </p>
          <p className="text-lg mb-4">
            We believe that Skill Sphere will empower users to make informed decisions about their learning journey, enabling them
            to effectively plan and develop the right skill sets for success in their respective fields.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
