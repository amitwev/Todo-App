import { TodoProps } from "./todo";

const apiUrl = "http://localhost:3000";

export const getTodos = async () => {
  const res = await fetch(`${apiUrl}/todos`);
  if (!res.ok) {
    throw new Error("Faild to get all todos");
  }
  return res.json();
};

export const deleteTodo = async (id: string) => {
  console.log("remove todo:", id);
  const res = await fetch(`${apiUrl}/todos/${id}`, {
    method: "DELETE"
  }); 
  if(!res.ok){
    throw new Error("Faild to remove todo"); 
  }
  return res.json(); 
};

export const addTodo = async (todo: TodoProps) => {
  console.log("Add todo: ", todo);
  const res = await fetch(`${apiUrl}/todos`, {
    method: "POST", 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(todo)
  })
  if(!res.ok){
    throw new Error("Failed to add todo")
  }
  return res.json(); 
};

export const updateTodo = async (todo: TodoProps) => {
  const res = await fetch(`${apiUrl}/todos/${todo.id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(todo)
  })
  if(!res.ok){
    throw new Error("Failed to update todo"); 
  }
  return res.json(); 

};

export const getTodo = async (id: number) => {
  const res = await fetch(`${apiUrl}/todos/${id}`); 
  if(!res.ok){
    throw new Error("Error get todo");
  }
  return res.json();
};
