"use client";

import UsersWrapper from "@/components/UsersWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/spinner";

export default function Users() {
  const [users, setUsers] = useState([]);
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

  // const Loading = () => {
  //     return (
  //         if (loading) return <p>Loading users...</p>;
  //     )
  // }
  if (error) return <p>Error: {error}</p>;

  return (
    <UsersWrapper>
      {loading ? <Spinner size="lg" color="black" /> : <h2>Users List</h2>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.phoneNumber} - {user.email} - {user.role}
          </li>
        ))}
      </ul>
    </UsersWrapper>
  );
}
