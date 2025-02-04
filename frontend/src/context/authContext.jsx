import React, { createContext, useContext, useState } from "react";
import { server } from "../main";
// Create a Context for authentication
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("userToken") ? true : false
  );
  const [userToken, setUserToken] = useState(
    localStorage.getItem("userToken") || ""
  );

  // Login function to send request and handle response
  const login = async (username, password) => {
    try {
      const response = await fetch(server + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const token = data.accessToken; // Assuming the response contains a token field
        localStorage.setItem("userToken", token);
        setUserToken(token);
        setIsAuthenticated(true);
        console.log("Login successful");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in");
    }
  };

  // Logout function
  const logout = async () => {
    // try{
    //   const response = await fetch(server + "logout", {
    //     method: "GET",
    //     credentials: 'include',
    //   });

    //   const data = await response.json();
    //   console.log(data.message);
    //   // if(response.ok) {
    //     localStorage.removeItem("userToken");
    //     setUserToken("");
    //     setIsAuthenticated(false);
    //     console.log("Logout successful");
    //   // }
    //   // Should print "Logged out successfully"

    //   // Clear local storage and update auth state

    // } catch (error) {
    //   console.error("Error logging out:", error);
    //   alert("An error occurred while logging out");
    // }
    localStorage.removeItem("userToken");
    setUserToken("");
    setIsAuthenticated(false);
    console.log("Logout successful");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
