import React from "react";

interface FooterProps {
    leftItems?: number;
}

export function Footer({ leftItems }: FooterProps) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{leftItems}</strong> items left</span>
            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
} 