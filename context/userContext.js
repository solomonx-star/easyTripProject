"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
  });
  const router = useRouter();

  // Function to handle login
  const login = (user, token) => {
    setAuthState({ isAuthenticated: true, user, token });
    // Save token and user data to cookies for persistence
    Cookies.set("authToken", token, { expires: 2, secure: true }); // Cookie expires in 2 days
    Cookies.set("_id", user._id, { expires: 2, secure: true }); // Save user ID
    Cookies.set("user", JSON.stringify(user), { expires: 2, secure: true }); // Save user info
    router.push(user.role === "admin" ? "/admin/dashboard" : "/user/Homepage");
  };

  // Function to handle logout
  const logout = () => {
    const userRole = authState.user?.role;

    setAuthState({ isAuthenticated: false, user: null, token: null });
    Cookies.remove("authToken"); // Remove the token cookie
    Cookies.remove("_id"); // Remove the user ID cookie
    Cookies.remove("user"); // Remove the user cookie
    if (userRole === "customer") {
      router.push("/user/Homepage");
    } else if (userRole === "admin") {
      router.push("/admin/login");
    } else {
      router.push("/");
    }
  };

  // Initialize authentication on app load
  useEffect(() => {
    const token = Cookies.get("authToken");
    const userId = Cookies.get("_id");

    const fetchUser = async () => {
      if (!token || !userId) {
        // console.error("No token or user ID found in cookies");
        logout(); // Logout if token or user ID is missing
        return;
      }

      try {
        // Fetch user data
        const response = await axios.get(
          `https://easytrip-salone.up.railway.app/api/auth/getUser/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Update authentication state
        setAuthState({
          isAuthenticated: true,
          user: response.data,
          token: token,
        });
      } catch (err) {
        console.error("Error fetching user:", err);
        logout();
      }
    };

    fetchUser();
  }, []); // Run only on initial render

  return (
    <AuthContext.Provider value={{ authState, setAuthState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
