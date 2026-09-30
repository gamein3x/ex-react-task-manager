import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext.jsx";
import TaskRow from "../components/TaskRow.jsx";

export default function TaskList() {

    const { tasks } = useGlobalContext();

    return <>
        <h1>TaskList Page</h1>

        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Data di creazione</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <TaskRow key={task.id} task={task} />
                ))}
            </tbody>
        </table>

        <Link to={"/"}>
            <button> Go Back </button>
        </Link>
    </>
};