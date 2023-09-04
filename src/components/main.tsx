import React from "react";
import { Todos } from "./todos";
import { TodoProps } from ".";

type MainProps = {
    todos?: TodoProps[];
}

export function Main({todos}: MainProps) {
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <Todos todos={todos}/>
        </section>
    )
}