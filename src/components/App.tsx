import { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Main,
  TodoProps,
  useTodoContext,
  getAllTodos
} from "../imports";

export default function App() {
  const [todos, setTodos] = useState<TodoProps[]>();
  const todoContext = useTodoContext();

  useEffect(() => {
    async function todos(){
      const tds = await getAllTodos();
      setTodos(tds);
      todoContext?.setUpdateTodos(false);
    }

    if (todoContext?.updateTodos) {
      todos();
    }
  }, [todos, todoContext?.updateTodos]);

  return (
      <section className="todoapp">
        <Header title="todos" />
        <Main todos={todos} />
        <Footer leftItems={todos?.length} />
      </section>
  );
}
