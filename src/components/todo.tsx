import React, { useState } from "react";
import { deleteTodo, useTodoContext, updateTodo } from "../imports";

export type TodoProps = {
  userId?: number;
  id?: string;
  title?: string;
  completed?: boolean;
};

export function Todo({ title, id, completed }: TodoProps) {
  const [text, setText] = useState(title);
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(completed);
  const todoContext = useTodoContext();

  const removeTodo = async (id: string) => {
    await deleteTodo(id); 
    todoContext?.setUpdateTodos(true);
  };

  const updateCheckbox = () => {
    setIsChecked((prev) => {
      updateTodoElement({id: id, title: text, completed: !prev })
      return !prev
    });
  };

  const editElement = () => {
    setIsEdit((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleInputBlur = () => {
    setIsEdit(false);
    updateTodoElement({id: id, title: text, completed: isChecked })
  };

  const updateTodoElement = async (todo: TodoProps) => {
    await updateTodo(todo);
    todoContext?.setUpdateTodos(true);
  }

  return (
    <li data-is-completed={completed}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={updateCheckbox}
          checked={isChecked}
        />
        {isEdit ? (
          <input
            type="text"
            value={text}
            onChange={(e) => handleInputChange(e)}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <label onClick={editElement}>{text}</label>
        )}
        <button
          className="destroy"
          id={id}
          onClick={(event) => removeTodo(event.currentTarget.id)}
        />
      </div>
    </li>
  );
}
