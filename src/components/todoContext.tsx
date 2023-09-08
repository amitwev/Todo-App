import React, { createContext, useContext } from "react";

type TodoContextType = {
  setUpdateTodos: React.Dispatch<React.SetStateAction<boolean>>;
  updateTodos: boolean;
};

type TodoContextProps = {
  children: React.ReactNode;
  setUpdateTodos: React.Dispatch<React.SetStateAction<boolean>>;
  updateTodos: boolean;
};

const Context = createContext<TodoContextType | undefined>(undefined);

export function TodoContext({ children, setUpdateTodos, updateTodos }: TodoContextProps) {
  return (
    <Context.Provider value={{ setUpdateTodos, updateTodos }}>
      {children}
    </Context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodoContext() {
  return useContext(Context);
}
