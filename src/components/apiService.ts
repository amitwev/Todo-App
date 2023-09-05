import { TodoProps } from "./todo";

const apiUrl = "http://localhost:3000";

export const getTodos = async () => {
  const res = await fetch(`${apiUrl}/todos`);
  if (!res.ok) {
    throw new Error("Faild to get all todos");
  }
  return res.json();
};

export const deleteTodo = async (id: number) => {
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
};

export const updateTodo = async (todo: TodoProps) => {
  console.log("Update Todo: ", todo);
};

export const getTodo = async (id: number) => {
  console.log("Get todo: ", id);
};
