import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(server+"register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201 || response.status === 200) {
        setSuccess("User registered successfully!");
        console.log("User registered successfully!"); 
        setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="w-full h-screen flex relative">
      {/* Left Background */}
      <div className="w-1/2 bg-white"></div>

      {/* Right Background */}
      <div className="w-1/2" style={{ backgroundColor: "#565c58" }}></div>

      {/* Centered Register Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-1/3">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Sign Up</h2>

          {error && <p className="text-red-500 text-center mb-2">{error}</p>}
          {success && <p className="text-green-500 text-center mb-2">{success}</p>}

          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none"
                placeholder="Enter Username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded-lg focus:outline-none border"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
