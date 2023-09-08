import React, { useState, useEffect } from "react";
import {
  Header,
  Footer,
  Main,
  TodoProps,
  getTodos,
  TodoContext,
  useFetch
} from "./components/index";

export default function App() {
  const [todos, setTodos] = useState<TodoProps[]>();
  const [updateTodos, setUpdateTodos] = useState<boolean>(true);
  const api = useFetch('http://localhost:3000/todos');
  console.log("Api:", api);

  useEffect(() => {
    if (updateTodos) {
      console.log("update todos");
      getTodos()
        .then((data: TodoProps[]) => {
          setTodos(data);
          setUpdateTodos(false);
        })
        .catch((err) => {
          console.log("Err:", err);
        });
    }
  }, [updateTodos]);

  return (
    <TodoContext setUpdateTodos={setUpdateTodos}>
      <section className="todoapp">
        <Header title="todos" />
        <Main todos={todos} />
        <Footer leftItems={todos?.length} />
      </section>
    </TodoContext>
  );
}
