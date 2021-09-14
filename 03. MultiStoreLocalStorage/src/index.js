import React from "react";
import { render } from "react-dom";
import "./style.css";
import Todos from './Todos';
import AppReducer from './reducer'
import { StoreProvider } from "./useStore";
const storeKey = "APP_STORE"

let initialState = {
  todos: [
    {id : 1, name : "Task 1", completed : false}
  ]
};

// Localstorage
try {
  initialState = JSON.parse(localStorage.getItem(storeKey)) || initialState
} catch { }

const reducer = (state, action) => {
  const newState = AppReducer(state, action)
  localStorage.setItem(storeKey, JSON.stringify(newState))
  return newState
}
// END Localstorage

function App() {
  return (
    <StoreProvider reducer={reducer} initialState={initialState}>
      <Todos/>
    </StoreProvider>
  );
}

render(<App />, document.getElementById("root"));
