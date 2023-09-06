import React, { useEffect, useState } from "react";
import { deleteTodo, updateTodo } from "./apiService";

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

  const removeTodo = (id: string) => {
    deleteTodo(id)
      .then((data) => {
        console.log("Deleted: ", data);
      })
      .catch((err) => {
        console.log("Failed to delete todo with id ", id, ", error:", err);
      });
  };

  const updateCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const editElement = () => {
    setIsEdit((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleInputBlur = () => {
    setIsEdit(false);
  };

//   const updateTodoElement = (todo: TodoProps) => {
//     updateTodo(todo)
//     .then((data) => {
//       console.log("Todo updated", data);
//     })
//     .catch((err) => {
//       console.log("Failed to update todo with id: ", id, ", error: ", err);
//     });
//   }

  return (
    <li>
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
