import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-100 m-0">
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
          className="w-full h-auto max-h-[500px] object-cover rounded-l-sm shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
