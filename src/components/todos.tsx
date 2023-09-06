import React from "react";
import { TodoProps, Todo } from './todo';

type TodosProps = {
    todos?: TodoProps[]; 
}

export function Todos({todos}: TodosProps) {
    return (
        <ul className="todo-list">
            {
                todos?.map((todo, index) => {
                    return <Todo title={todo.title} key={`${todo.title}-${index}`} id={todo.id} completed={todo.completed}/>
                })
            }
        </ul>
    )
}