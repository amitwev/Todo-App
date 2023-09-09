import { TodoProps } from "../components/todo";
import { makeApiRequest } from './apiService';

export const getAllTodos = async (): Promise<TodoProps[]> => {
  const data = await makeApiRequest<TodoProps[]>('/todos');
  return data;
};

export const getTodo = async (id: number) => {
  const data = await makeApiRequest<TodoProps>(`/todos/${id}`);
  return data; 
};

export const deleteTodo = async (id: string | undefined) => {
  const data = await makeApiRequest<unknown>(`/todos/${id}`, {
    method: "DELETE",
  });
  return data; 
};

export const deleteTodos = async (id: (string | undefined)[] | undefined) => {
  const data = id?.map(todo => deleteTodo(todo))
  return data;
}

export const addTodo = async (todo: TodoProps) => {
  const data = await makeApiRequest<TodoProps>(`/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: todo,
  }); 
  return data; 
};

export const updateTodo = async (todo: TodoProps) => {
  const data = await makeApiRequest<TodoProps>(`/todos/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: todo,
  })
  return data;
};