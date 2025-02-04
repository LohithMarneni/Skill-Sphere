function Register() {
    const handleOnSubmit = (e)=>{
        e.preventDefault()
    }
    return (
      <div className="w-full h-screen flex relative">
        {/* Left Background */}
        <div className="w-1/2 bg-white"></div>
  
        {/* Right Background */}
        <div className="w-1/2" style={{ backgroundColor: "#565c58" }}></div>
  
        {/* Centered Login Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white shadow-2xl rounded-2xl p-8 w-1/3">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none"
                  placeholder="Enter Username"
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
                />
              </div>
              <button onClick={handleOnSubmit} className="w-full bg-black text-white py-2 rounded-lg hover:bg-black cursor-pointer">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;