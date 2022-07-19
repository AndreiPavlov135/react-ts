import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

export default function TodoPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const respons = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`
      );
      setTodos(respons.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      }}
    />
  );
}
