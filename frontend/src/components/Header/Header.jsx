import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white text-white w-full border-b-2 border-black shadow-md">
      <h1 className="text-2xl font-bold text-black">Skill Sphere</h1>
      <div className="text-black">
        <Link
          className="mx-3 text-black hover:text-gray-700 active:text-gray-900 focus:outline-none"
          to="/"
        >
          Home
        </Link>
        <Link
          className="mx-3 text-black hover:text-gray-700 active:text-gray-900 focus:outline-none"
          to="/about"
        >
          AboutUs
        </Link>
        <Link
          className="mx-3 text-black hover:text-gray-700 active:text-gray-900 focus:outline-none"
          to="/contactus"
        >
          ContactUs
        </Link>

        {!isAuthenticated ? (
         <Link
         className="mx-3 bg-black text-white px-3 py-2 rounded hover:bg-gray-800"
         to="/login"
         style={{ color: "white" }} // Ensuring text remains white
       >
         Login
       </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
