import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

export default function UserPage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const respons = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(respons.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => {
        return (
          <UserItem
            click={(user) => {
              navigate("/users/" + user.id);
            }}
            user={user}
            key={user.id}
          />
        );
      }}
    />
  );
}
