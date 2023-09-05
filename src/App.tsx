/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Header, Footer, Main, TodoProps, getTodos } from "./components/index";

export default function App() {
  const [todos, setTodos] = useState<TodoProps[]>();

  if (!todos) {
    getTodos()
    .then((data: TodoProps[]) => {
      setTodos(data); 
    })
    .catch(err => {
      console.log("Err:", err); 
    })
    
  }

  return (
    <section className="todoapp">
      <Header title="todos" />
      <Main todos={todos} />
      <Footer leftItems={todos?.length} />
    </section>
  );
}
