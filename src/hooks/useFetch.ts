import { useEffect, useState } from "react";
import { useTodoContext } from "../imports";

type FetchOptions<T> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: HeadersInit;
  body: T;
};

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
          body: JSON.stringify(options?.body),
        });
        const content = await res.json();
        setLoading(false);
        setData(content);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, todoContext?.updateTodos]);

  return { data, loading, error };
};
