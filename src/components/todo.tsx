import React, { useState } from "react";
import { deleteTodo, useTodoContext, updateTodo } from "./index";

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
  const removeTodo = (id: string) => {
    deleteTodo(id)
      .then((data) => {
        console.log("Deleted: ", data);
        todoContext?.setUpdateTodos(true);
      })
      .catch((err) => {
        console.log("Failed to delete todo with id ", id, ", error:", err);
      });
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

  const updateTodoElement = (todo: TodoProps) => {
    updateTodo(todo)
    .then(() => {
     todoContext?.setUpdateTodos(true);
    })
    .catch((err) => {
      console.log("Failed to update todo with id: ", id, ", error: ", err);
    });
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
