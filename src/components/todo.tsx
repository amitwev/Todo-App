import React from "react";
import { deleteTodo, updateTodo } from './apiService'; 

export type TodoProps = {
    userId?: number,
    id: number,
    title?: string,
    completed?: boolean
}

export function Todo({ title, id, completed }: TodoProps) {
    const removeTodo = () => {
        deleteTodo(id)
        .then(data => {
            console.log("Deleted: ", data);
        })
        .catch(err => {
            console.log("Failed to delete todo with id ", id, ", error:", err); 
        })
    }
    const update = (checked: boolean) => {
        updateTodo({id: id, completed: checked, title: title})
        .then(data => {
            console.log("Todo updated", data); 
        })
        .catch(err => {
            console.log("Failed to update todo with id: ", id, ", error: ", err);
        })
    }
    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={(event) => update(event.currentTarget.checked)} checked={completed}/>
                <label>{title}</label>
                <button className="destroy" id={id?.toString()} onClick={removeTodo}/>
            </div>
            <input className="edit" />
        </li>
    )
}