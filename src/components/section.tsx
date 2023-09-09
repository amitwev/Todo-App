import React from "react";
import { Todos } from "./todos";
import { TodoProps } from "../imports";

type SectionProps = {
    todos?: TodoProps[];
}

export function Section({todos}: SectionProps) {
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <Todos todos={todos}/>
        </section>
    )
}