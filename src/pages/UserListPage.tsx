import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { getUsers } from "../api/userApi";
import UserList from "../componets/users/UserList";


export default function UsersListPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      console.log("Fetched users:", data); 
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <UserList users={users} refresh={fetchUsers} />;
}
