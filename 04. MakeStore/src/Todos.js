import React from 'react';
import { useTodos } from './useTodoStore'
import Todo from './Todo';
import AddTodo from './AddTodo'

export default function Todos() {
  const { todos } = useTodos()

  

  return (
    <div>
      <AddTodo />
      <br />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}