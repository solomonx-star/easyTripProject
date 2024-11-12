"use client";

import UsersWrapper from "@/components/UsersWrapper";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

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

  return (
    <UsersWrapper>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.phoneNumber} - {user.email}
          </li>
        ))}
      </ul>
    </UsersWrapper>
  );
}
