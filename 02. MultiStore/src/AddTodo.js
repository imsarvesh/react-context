import React from "react";

import {useDispatch} from "./useStore";

export default function Todo({ todo }) {
  const [newTodo, setNewTodo] = React.useState();
  const dispatch = useDispatch();

  const addTodo = e => {
    e.preventDefault();
    dispatch({
      type: "addTodo",
      todo: {
        name: newTodo
      }
    });
    setNewTodo('');
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add New Task"
        onChange={e => setNewTodo(e.target.value)}
        value={newTodo}
      />
    </form>
  );
}
