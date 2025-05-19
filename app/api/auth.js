import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Utility function to safely get token
const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token") || null;
};

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // Fixed: Return config instead of null
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common error cases
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      // Optionally redirect to login
      // window.location.href = "/login";
    }
    return Promise.reject(error.response?.data || { message: "An unexpected error occurred" });
  }
);

// Register passenger
export const PassengerRegister = async ({
  firstName,
  lastName,
  phoneNumber,
  username,
  email,
  password,
  confirmPassword,
}) => {
  const payload = {
    firstName,
    lastName,
    phoneNumber,
    username,
    email,
    password,
    confirmPassword,
  };

  try {
    const response = await apiClient.post("/auth/signup", payload);
    return response.data;
  } catch (error) {
    throw error; // Let the caller handle the error
  }
};

// Login service
export const LoginService = async ({ phoneNumber, password }) => {
  const payload = { phoneNumber, password };

  try {
    const response = await apiClient.post("/auth/login", payload);
    const { token } = response.data;

    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return response.data;
  } catch (error) {
    throw error; // Let the caller handle the error
  }
};

// Utility to clear auth token
export const clearAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    delete apiClient.defaults.headers.common["Authorization"];
  }
};