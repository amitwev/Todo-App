import { useState } from "react";
import { TodoContext, App } from "../imports";

export const AppContainer = () => {
    const [updateTodos, setUpdateTodos] = useState<boolean>(true);
    return (
      <TodoContext setUpdateTodos={setUpdateTodos} updateTodos={updateTodos}>
        <App />
      </TodoContext>
    );
  };