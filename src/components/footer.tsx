interface FooterProps {
    todosLength?: number;
    leftItems?: number; 
    clearCompleted: () => void; 
}

export function Footer({ todosLength, leftItems, clearCompleted }: FooterProps) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{leftItems}/ {todosLength}</strong> items left</span>
            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    )
} 