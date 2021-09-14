import React from "react";
import { render } from "react-dom";
import "./style.css";
import Todos from './Todos';
import reducer from './reducer'
import { StoreProvider } from "./useStore";

const initialState = {
  todos: [
    {id : 1, name : "Task 1", completed : false}
  ]
};

function App() {
  return (
    <StoreProvider reducer={reducer} initialState={initialState}>
      <Todos/>
    </StoreProvider>
  );
}

render(<App />, document.getElementById("root"));
