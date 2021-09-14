import React from "react";
import { render } from "react-dom";
import "./style.css";
import Todos from './Todos';
import { TodosProvider } from './useTodoStore';

function App() {
  return (
    <TodosProvider>
      <Todos />
    </TodosProvider>
  );
}

render(<App />, document.getElementById("root"));
