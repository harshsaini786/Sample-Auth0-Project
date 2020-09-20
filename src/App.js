import React from "react";
import "./styles.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function App() {
  return (
    <div className="app">
      <TodoInput />
      <TodoList />
    </div>
  );
}
