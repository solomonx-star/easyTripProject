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
    Cookies.set("authToken", token, { expires: 2 }); // Cookie expires in 7 days
    Cookies.set("user", JSON.stringify(user), { expires: 2 });
    router.push(user.role === "admin" ? "/admin/dashboard" : "/user/Homepage");
  };

  // Function to handle logout
  const logout = () => {
    const userRole = authState.user?.role;

    setAuthState({ isAuthenticated: false, user: null, token: null });
    Cookies.remove("authToken"); // Remove the token cookie
    Cookies.remove("user");
    if (userRole === "customer") {
      router.push("/user/Homepage");
    } else if (userRole === "admin") {
      router.push("/admin/login");
    } else {
      router.push("/");
    }

    // Redirect to login page
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const savedToken = Cookies.get("authToken");
      const savedUser = Cookies.get("user");

      if (savedToken && savedUser) {
        try {
          const res = await fetch("/api/auth/authenticate", {
            credentials: "include",
          });
          if (res.ok) {
            setAuthState({
              isAuthenticated: true,
              user: JSON.parse(savedUser),
              token: savedToken,
            });
          } else {
            logout();
          }
        } catch (error) {
          console.error("Error during authentication check:", error);
          logout();
        }
      }
    };

    initializeAuth();
  }, []);

  //  useEffect(() => {
  //    // Check authentication (e.g., via cookies)
  //    const checkAuth = async () => {
  //      try {
  //        const res = await fetch("/api/auth/authenticate", { credentials: "include" }); // API to verify auth
  //        if (res.ok) {
  //          const data = await res.json();
  //          setAuthState({ isAuthenticated: true, user: data.user });
  //        } else {
  //          setAuthState({ isAuthenticated: false, user: null });
  //        }
  //      } catch (error) {
  //        console.error("Error checking auth:", error);
  //        setAuthState({ isAuthenticated: false, user: null });
  //      }
  //    };

  //    checkAuth();
  //  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
