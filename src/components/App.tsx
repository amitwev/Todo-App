import { useEffect, useState } from "react";
import {
  Header,
  Footer,
  Section,
  TodoProps,
  useTodoContext,
  getAllTodos,
  deleteTodos
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

  const clearCompleted = async () => {
    const tds = todos?.filter(item => item.completed); 
    const ids = tds?.map(todo => todo.id); 
    await deleteTodos(ids);
    todoContext?.setUpdateTodos(true);
  }

  const completedItems = () => {
    return todos?.filter(item => !item.completed).length;
  }

  return (
      <div className="todoapp">
        <Header title="todos" />
        <Section todos={todos} />
        <Footer leftItems={completedItems()} clearCompleted={clearCompleted} todosLength={todos?.length}/>
      </div>
  );
}
