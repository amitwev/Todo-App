import React, { useState } from 'react';
import { addTodo } from './apiService';
import { TodoProps } from '.';

interface HeaderProps {
    title: string;
}
export function Header({ title }: HeaderProps) {
    const [inputValue, setInputValue] = useState<string>("");
    const handleClicks = (e: React.KeyboardEvent<HTMLElement>) => {
        const acceptedElements = ["Enter", "NumpadEnter"]
        if (acceptedElements.includes(e.code)) {
            console.log("need to save the input", inputValue);
            addTodo({
                title: inputValue,
                completed: false,
                id: undefined
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((data: TodoProps) => {
                setInputValue("");
            })
            .catch(err => {
                console.log("failed to add todo:", err)
            })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus value={inputValue} onChange={handleInputChange} onKeyUp={handleClicks} />
        </header>
    )
}