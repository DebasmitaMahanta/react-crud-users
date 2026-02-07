import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import type { User } from "../types/user";

export const useUsers = () => {
const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
         try {
          setLoading(true);
       const data = await getUsers();
          setUsers(data);
     } catch (error) {
     console.error("Error fetching users:", error);
   } finally {
     setLoading(false);
}
};

useEffect(() => {
    fetchUsers();
  }, []);
return { users, loading, fetchUsers };


};
