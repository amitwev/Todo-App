import { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Section,
  TodoProps,
  useTodoContext,
  getAllTodos
} from "../imports";

export function App() {
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
        <Section todos={todos} />
        <Footer leftItems={todos?.length} />
      </section>
  );
}
