import React from "react";

export type TodoProps = {
    userId?: number,
    id?: number,
    title?: string,
    completed?: boolean
}

export function Todo({ title, id }: TodoProps) {
    // const removeTodo = (id) => {
    //     console.log(id)
    //     fetch(`http://localhost:3000/todos/${id}`, {
    //         method: "DELETE"
    //     })
    // }
    return (
        <li>
            <div className="view">
                <input className="toggle"
                    type="checkbox" />
                <label>{title}</label>
                <button className="destroy"/>
            </div>
            <input className="edit" />
        </li>
    )
}