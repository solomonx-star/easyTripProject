"use client";

import UsersWrapper from "@/components/UsersWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";
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

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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



  if (error) return <p>Error: {error}</p>;

  return (
    <UsersWrapper>
      <div className="flex flex-col flex-grow h-screen">
        <div className="h-[30%] flex items-center justify-around">
          <div className="h-[200px] w-[520px] rounded-md shadow bg-gray-100 justify-center items-center flex">
            <p className="text-[#189AA7]">
              {userCount !== null ? `Total Users: ${userCount}` : "Loading..."}
            </p>
          </div>
          <div className="h-[200px] w-[520px] rounded-md shadow bg-gray-100"></div>
          <div className="h-[200px] w-[520px] rounded-md shadow bg-gray-100"></div>
        </div>
        <div className="mt-auto p-5 flex-1 overflow-auto items-center justify-center">
          <div className="relative bg-gray-100 shadow-md w-full sm:rounded-lg">
            <Table className="w-full relative">
              <TableCaption></TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  {/* <TableHead>Profile Photo</TableHead> */}
                  <TableHead>Username</TableHead>
                  <TableHead className="">Email</TableHead>
                  <TableHead className="">Phone Number</TableHead>
                  <TableHead className="">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((item, index) => (
                  <TableRow key={item._id}>
                    <TableCell>{index + 1}</TableCell>
                    {/* <TableCell>{item}</TableCell> */}
                    <TableCell>{item.username}</TableCell>
                    <TableCell className="">{item.email}</TableCell>
                    <TableCell className="">{item.phoneNumber}</TableCell>
                    <TableCell className="">
                      <Button variant="destructive" className="">
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
        </div>
      </div>
      {/* <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.phoneNumber} - {user.email} - {user.role}
          </li>
        ))}
      </ul> */}
    </UsersWrapper>
  );
}
