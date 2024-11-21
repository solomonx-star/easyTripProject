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
          "https://easytrip-salone.up.railway.app/api/admin/users"
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
          "https://easytrip-salone.up.railway.app/api/admin/count"
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
      <div className="flex flex-col bg-gray-200 flex-grow h-screen">
        <div className="h-[30%] flex items-center justify-around">
          <div className="h-[200px] w-[500px] gap-10 flex flex-col rounded-3xl shadow bg-gray-100 p-5">
            <p className="text-[#189AA7] mt-4">
              {userCount !== null ? `Total Customer` : "Loading..."}
            </p>
            <p className="text-[#189AA7] text-5xl">{userCount}</p>
          </div>
          <div className="h-[200px] w-[500px] gap-10 flex flex-col rounded-3xl  shadow bg-gray-100 p-5">
            <p className="text-[#189AA7] mt-4">New Customer</p>
            <p className="text-[#189AA7] text-5xl">4</p>
          </div>
          <div className="h-[200px] w-[500px] rounded-3xl  shadow bg-gray-100"></div>
        </div>
        <div className="mt-auto p-5 flex-1 overflow-y items-center justify-center">
          <div className="flex justify-between">
            <div className=" w-[1200px] bg-white shadow-md sm:rounded-lg">
              <Table className="relative">
                {/* <TableCaption></TableCaption> */}
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    {/* <TableHead>Profile Photo</TableHead> */}
                    <TableHead>Username</TableHead>
                    <TableHead className="">Email</TableHead>
                    <TableHead className="">Phone Number</TableHead>
                    <TableHead className="">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={authState.user?.ProfilePhoto} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <p>{item.firstName}</p>
                        </div>
                      </TableCell>
                      {/* <TableCell>{item}</TableCell> */}
                      <TableCell>{item.username}</TableCell>
                      <TableCell className="">{item.email}</TableCell>
                      <TableCell className="">{item.phoneNumber}</TableCell>
                      <TableCell className="">
                        <Button
                          onClick={() => handleDelete(item._id)}
                          variant="destructive"
                          className=""
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex items-center justify-center">
                {loading ? (
                  <Spinner label="Loading......" size="lg" color="black" />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="bg-white pt-5 shadow h-[500px] rounded-lg relative w-[400px]">
              <div className="flex gap-4 flex-col items-center justify-center pt-3">
                <Avatar className="h-[80px] w-[80px]">
                  <AvatarImage src={authState.user?.ProfilePhoto} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Solomon Kanu</p>
              </div>
              <div className="flex justify-around mt-5 ">
                <div className="flex items-center gap-2">
                  <Mail size={15} />
                  <p className="text-xs">solomoncaster523@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} />
                  <p className="text-xs">+23299833165</p>
                </div>
              </div>
              <div className="p-7">
                <p className="font-bold">Booking History</p>
                <div className="flex flex-col gap-4">
                  <div className="h-[50px] w-[350px] rounded-md bg-gray-100"></div>
                  <div className="h-[50px] w-[350px] rounded-md bg-gray-100"></div>
                  <div className="h-[50px] w-[350px] rounded-md bg-gray-100"></div>
                  <div className="h-[50px] w-[350px] rounded-md bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UsersWrapper>
  );
}
