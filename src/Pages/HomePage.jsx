import { Link } from "react-router-dom";

export default function HomePage() {
    return <>
        <header>
            <div className="header-main">
                <h1>Task Manager</h1>
                <h3>Work in progress</h3>
            </div>
            <nav className="test-nav">
                <Link to="/tasks">Task List</Link>
                <Link to="/add-task">Add Task</Link>
            </nav>
        </header>
    </>
};