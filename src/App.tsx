import React, {  } from "react";
import {
  Header,
  Footer,
  Main,
  TodoProps,
  // getTodos,
  // TodoContext,
  useFetch,
  // getTodos
} from "./components/index";

export default function App() {
  // const [todos, setTodos] = useState<TodoProps[]>();
  const api = useFetch<TodoProps[]>('http://localhost:3000/todos');
  // console.log("Api: ", api); 

  // useEffect(() => {    
  //   if (updateTodos) {
  //     console.log("update todos");
  //     getTodos()
  //       .then((data: TodoProps[]) => {
  //         setTodos(data);
  //         setUpdateTodos(false);
  //       })
  //       .catch((err) => {
  //         console.log("Err:", err);
  //       });
  //   }
  // }, [updateTodos]);

  return (
      <section className="todoapp">
        <Header title="todos" />
        <Main todos={api.data} />
        <Footer leftItems={api.data?.length} />
      </section>
  );
}
