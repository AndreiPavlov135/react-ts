import React, { FC } from "react";
import { ITodo } from "../types/types";

interface ITodoProps {
  todo: ITodo;
}
const TodoItem: FC<ITodoProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};
export default TodoItem;
