import React, { useState } from 'react';

interface HeaderProps {
    title: string;
}
export function Header({ title }: HeaderProps) {
    const [inputValue, setInputValue] = useState<string>("");
    const handleCliks = (e: React.KeyboardEvent<HTMLElement>) => {
        const acceptedElements = ["Enter", "NumpadEnter"]
        if (acceptedElements.includes(e.code)) {
            console.log("need to save the input", inputValue);
            //reset the input
            fetch('http://localhost:3000/todos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": inputValue,
                    "completed": false
                })
            })
            .then(res => {
                if(res.status === 201){
                    setInputValue(""); 
                }
            })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus value={inputValue} onChange={handleInputChange} onKeyUp={handleCliks} />
        </header>
    )
}