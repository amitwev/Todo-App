import { useState, useEffect } from "react";
import { TodoProps } from "./todo";
import { useTodoContext } from "./index";

const apiUrl = "http://localhost:3000";

export const getTodos = async () => {
  const res = await fetch(`${apiUrl}/todos`);
  if (!res.ok) {
    throw new Error("Failed to get all todos");
  }
  return res.json();
};

export const deleteTodo = async (id: string) => {
  console.log("remove todo:", id);
  const res = await fetch(`${apiUrl}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Faild to remove todo");
  }
  return res.json();
};

export const addTodo = async (todo: TodoProps) => {
  console.log("Add todo: ", todo);
  const res = await fetch(`${apiUrl}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("Failed to add todo");
  }
  return res.json();
};

export const updateTodo = async (todo: TodoProps) => {
  const res = await fetch(`${apiUrl}/todos/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error("Failed to update todo");
  }
  return res.json();
};

export const getTodo = async (id: number) => {
  const res = await fetch(`${apiUrl}/todos/${id}`);
  if (!res.ok) {
    throw new Error("Error get todo");
  }
  return res.json();
};

type FetchOptions<T> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body: T;
}

export const useFetch = <T>(url: string, options?: FetchOptions<T>) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const todoContext = useTodoContext();
  
  useEffect(() => {
    async function fetchData() {
      todoContext?.setUpdateTodos(false);
      try {
        const res = await fetch(url, {
          method: options?.method || "GET",
          headers: options?.headers, 
          body: JSON.stringify(options?.body)
        });
        const content = await res.json();
        setLoading(false);
        setData(content);
      } catch (err: unknown) {
        if(err instanceof Error){
          setError(err.message);
        }
        setLoading(false);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ url, todoContext?.updateTodos ]);
  
  return { data, loading, error };
};
