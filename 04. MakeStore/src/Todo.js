import React from "react";

import { useTodosDispatch } from "./useTodoStore";

export default function Todo({ todo }) {
  const dispatch = useTodosDispatch();

  const handleChange = () => {
    dispatch({
      type: "toggleTodo",
      id: todo.id
    });
  };

  return (
    <div>
      <label>
        <input
          checked={todo.completed}
          onChange={handleChange}
          type="checkbox"
        />
        {todo.completed ? <del>{todo.name}</del> : todo.name}
      </label>
    </div>
  );
}
