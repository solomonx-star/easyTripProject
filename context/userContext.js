"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie for cookie management

// Create the context
export const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  // Function to handle login
  const login = (user, token) => {
    setUser(user);
    setToken(token);
    // Save token and user data to cookies for persistence
    Cookies.set("authToken", token, { expires: 7 }); // Cookie expires in 7 days
    Cookies.set("user", JSON.stringify(user), { expires: 7 });
    if (user.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/user/Homepage ");
    }
    
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove("authToken"); // Remove the token cookie
    Cookies.remove("user"); // Remove the user cookie
    router.push("/admin/login"); // Redirect to login page
  };

  // Check for token and user data on component mount
  useEffect(() => {
    const savedToken = Cookies.get("authToken");
    const savedUserData = Cookies.get("user");

    if (savedToken && savedUserData) {
      setToken(savedToken);
      setUser(JSON.parse(savedUserData));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
