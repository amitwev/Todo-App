interface FooterProps {
    leftItems?: number;
    clearCompleted: () => void; 
}

export function Footer({ leftItems, clearCompleted }: FooterProps) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{leftItems}</strong> items left</span>
            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    )
} 