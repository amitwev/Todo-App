import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { TodoContext } from "./components";
import "./index.css";

const MainApp = () => {
  const [updateTodos, setUpdateTodos] = useState<boolean>(true);
  return (
    <TodoContext setUpdateTodos={setUpdateTodos} updateTodos={updateTodos}>
      <App />
    </TodoContext>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
