"use client";

import UsersWrapper from "@/components/UsersWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/userContext";
import { Mail, Phone } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { authState } = useAuth();

  const bookingHistory = [
    { id: 1, date: "2025-05-15", destination: "New York", status: "Confirmed" },
    { id: 2, date: "2025-05-10", destination: "London", status: "Pending" },
    { id: 3, date: "2025-05-05", destination: "Tokyo", status: "Completed" },
  ];

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("User deleted successfully");
        alert("User deleted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error deleting user:", errorData.message);
        alert("Failed to delete user: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Send GET request to fetch users
        const response = await axios.get(
          "http://localhost:5000/api/admin/users"
        );

        // Update state with fetched users
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/count"
        );
        setUserCount(response.data.count); // Access the count directly
      } catch (err) {
        console.error("Error fetching user count:", err);
        setError("Error fetching user count.");
      }
    };

    fetchUserCount();
  }, []);

  const handleDelete = async (userId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirm) {
      await deleteUser(userId);
      // Optionally, refresh the list of users or update the state
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <UsersWrapper>
      <div className="flex flex-col min-w-full  lg:pl-[300px] md:pl-9 overflow-hidden bg-gray-900 min-h-screen p-4 sm:p-6  lg:p-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Customers */}
          <div className="flex flex-col h-40 sm:h-48 rounded-2xl shadow-lg bg-gray-800 p-6 transition-transform hover:scale-105">
            <p className="text-white mt-5 text-sm font-medium mb-2">
              {userCount !== null ? "Total Booking" : "Loading..."}
            </p>
            <p className="text-white text-4xl sm:text-5xl font-bold">
              {userCount !== null ? userCount : "--"}
            </p>
          </div>
          {/* New Customers */}
          <div className="flex flex-col h-40 sm:h-48 rounded-2xl shadow-lg bg-gray-800 p-6 transition-transform hover:scale-105">
            <p className="text-white mt-5 text-sm font-medium mb-2">Sold</p>
            <p className="text-white text-4xl sm:text-5xl font-bold">
              {/* {newUserCount !== null ? newUserCount : "--"} */}
            </p>
          </div>
          {/* Active Bookings */}
          <div className="flex flex-col h-40 sm:h-48 rounded-2xl shadow-lg bg-gray-800 p-6 transition-transform hover:scale-105">
            <p className="text-white mt-5 text-sm font-medium mb-2">Canceled</p>
            <p className="text-white text-4xl sm:text-5xl font-bold">
              {/* {activeBookings !== null ? activeBookings : "--"} */}
            </p>
          </div>
        </div>

        {/* Table and Profile Card */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-y-auto">
          {/* User Table */}
          <div className="flex-1 sm:grid sm:grid-cols-1 bg-gray-700 shadow-md rounded-lg overflow-hidden p-2">
            <div className="grid grid-cols-1 justify-between sm:flex sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 rounded-lg">
              <div className="w-[47%] bg-green-300 rounded-lg p-2 flex flex-col">
                <p>Total Income</p>
                <p>$16,000</p>
              </div>
              <div className="w-[47%] bg-red-300 rounded-lg p-2 gap-3 flex flex-col">
                <p>Total Booking</p>
                <p>200</p>
                <p>Pending</p>
                <p>Canceled</p>
                <p>Sold</p>
              </div>
            </div>
            <div>

            </div>
          </div>

          {/* Profile Card */}
          <div className="w-full lg:w-96 bg-gray-800 shadow-md rounded-lg p-6 flex flex-col">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={authState.user?.profilePhoto} />
                <AvatarFallback>
                  {authState.user?.firstName?.charAt(0).toUpperCase() +
                    (authState.user?.lastName?.charAt(0).toUpperCase() || "")}
                </AvatarFallback>
              </Avatar>
              <p className="text-white text-lg font-semibold">
                {authState.user?.firstName} {authState.user?.lastName}
              </p>
            </div>
            <div className="flex justify-around mt-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-teal-300" />
                <p>{authState.user?.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-teal-300" />
                <p>{authState.user?.phoneNumber}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-white font-bold mb-3">Booking History</p>
              <div className="flex flex-col gap-3">
                {bookingHistory.length > 0 ? (
                  bookingHistory.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex justify-between items-center p-3 rounded-md bg-gray-700 text-white text-sm"
                    >
                      <div>
                        <p>{booking.date}</p>
                        <p className="text-gray-300">{booking.destination}</p>
                      </div>
                      <p
                        className={`text-${
                          booking.status === "Confirmed"
                            ? "green"
                            : booking.status === "Pending"
                            ? "yellow"
                            : "gray"
                        }-400`}
                      >
                        {booking.status}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm">No bookings found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UsersWrapper>
  );
}
