import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { setIsAuthenticated } = useOutletContext();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    if (credentials.username === "admin" && credentials.password === "password") {
      localStorage.setItem("userToken", "authenticated");
      setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      {/* Backgrounds */}
      <div className="w-1/2" style={{ backgroundColor: "#565c58" }}></div>
      <div className="w-1/2 bg-white"></div>

      {/* Centered Login Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-1/3">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Login</h2>
          <form className="space-y-4" onSubmit={handleOnSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none"
                placeholder="Enter Username"
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-2 rounded-lg focus:outline-none border"
                placeholder="Enter your password"
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-black cursor-pointer">
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
