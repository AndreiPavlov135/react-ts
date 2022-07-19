import { FC } from "react";
import { IUser } from "../types/types";

interface IUserItemProps {
  user: IUser;
  click: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({ user, click }) => {
  return (
    <div
      onClick={() => click(user)}
      style={{
        padding: "15px",
        border: "1px solid lightgray",
        cursor: "pointer",
      }}
    >
      {user.id}. {user.name} <b>проживает в городе:</b> {user.address.city}, на
      улице: {user.address.street}
    </div>
  );
};

export default UserItem;
