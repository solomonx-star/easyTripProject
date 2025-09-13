"use client";

import UsersWrapper from "@/components/UsersWrapper";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Spinner } from "@nextui-org/spinner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
import { useAuth } from "@/context/userContext"; // Hypothetical context for sidebar state
import { Mail, Phone } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authState } = useAuth();
 // Access sidebar state

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
        setUsers(users.filter((user) => user._id !== userId)); // Update state
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
        const response = await axios.get(
          "http://localhost:5000/api/admin/users"
        );
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
        setUserCount(response.data.count);
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
    }
  };

  if (error) return <p className="text-red-400 p-4">Error: {error}</p>;

  return (
    <UsersWrapper>
      <div
        className={`flex flex-col min-w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-gray-900 transition-all duration-300`} // Dynamic padding for sidebar (80px + 16px gap or 250px + 14px gap)
      >
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div
            className="flex flex-col h-40 sm:h-48 rounded-2xl shadow-lg bg-gray-800 p-6 transition-transform hover:scale-105"
            role="region"
            aria-label="Total Customers Metric"
          >
            <p className="text-teal-300 text-sm font-medium mb-2">
              {userCount !== null ? "Total Customers" : "Loading..."}
            </p>
            <p className="text-teal-300 text-4xl sm:text-5xl font-bold">
              {userCount !== null ? userCount : "--"}
            </p>
          </div>
          <div
            className="flex flex-col h-40 sm:h-48 rounded-2xl shadow-lg bg-gray-800 p-6 transition-transform hover:scale-105"
            role="region"
            aria-label="New Customers Metric"
          >
            <p className="text-teal-300 text-sm font-medium mb-2">New Customers</p>
            <p className="text-teal-300 text-4xl sm:text-5xl font-bold">--</p>
          </div>
          <div
            className="flex flex-col h-40 sm:h-48 rounded-2xl shadow-lg bg-gray-800 p-6 transition-transform hover:scale-105"
            role="region"
            aria-label="Active Bookings Metric"
          >
            <p className="text-teal-300 text-sm font-medium mb-2">Active Bookings</p>
            <p className="text-teal-300 text-4xl sm:text-5xl font-bold">--</p>
          </div>
        </div>

        {/* Table and Profile Card */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1 overflow-y-auto max-h-[calc(100vh-64px)]">
          {/* User Table */}
          <div className="flex-1 bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={item.profilePhoto} />
                          <AvatarFallback>
                            {item.firstName?.charAt(0).toUpperCase() +
                              (item.lastName?.charAt(0).toUpperCase() || "")}
                          </AvatarFallback>
                        </Avatar>
                        <p className="text-white">{item.firstName} {item.lastName}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-white">{item.username}</TableCell>
                    <TableCell className="text-white">{item.email}</TableCell>
                    <TableCell className="text-white">{item.phoneNumber}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDelete(item._id)}
                        variant="destructive"
                        size="sm"
                        aria-label={`Delete user ${item.firstName} ${item.lastName}`}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {loading && (
              <div className="flex items-center justify-center py-4">
                <Spinner label="Loading users..." size="lg" color="teal" aria-live="polite" />
              </div>
            )}
            {!loading && users.length === 0 && (
              <div className="text-gray-400 text-center py-4">
                No users found.
              </div>
            )}
          </div>

          {/* Profile Card */}
          <div className="w-full lg:w-96 bg-gray-800 shadow-md rounded-lg p-6 flex flex-col">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={authState.user?.profilePhoto} />
                <AvatarFallback>
                  {authState.user?.firstName?.charAt(0).toUpperCase()
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
              <div className="flex flex-col gap-3" role="list">
                {bookingHistory.length > 0 ? (
                  bookingHistory.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex justify-between items-center p-3 rounded-md bg-gray-700 text-white text-sm"
                      role="listitem"
                    >
                      <div>
                        <p>{booking.date}</p>
                        <p className="text-gray-300">{booking.destination}</p>
                      </div>
                      <p
                        className={
                          booking.status === "Confirmed"
                            ? "text-green-400"
                            : booking.status === "Pending"
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }
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