import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";

// interface IUserPageParams {
//   id: string;
// }
export default function UserItemPage() {
  const [user, setUser] = useState<IUser>();
  const nvigate = useNavigate();
  const params = useParams<string>();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const respons = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(respons.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <button
        onClick={() => {
          nvigate("/users");
        }}
      >
        Back
      </button>
      <h1>Пользователь: {user?.name}</h1>
      <div>почта: {user?.email}</div>
      <div>
        адрес: {user?.address.city} {user?.address.street}{" "}
        {user?.address.zipcode}
      </div>
    </div>
  );
}
