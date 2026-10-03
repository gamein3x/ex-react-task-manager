import { useMemo } from "react";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import TaskRow from "./TaskRow.jsx";

const statusOrder = { "Doing": 0, "To do": 1 };

export default function ToDoList() {

    const { tasks } = useGlobalContext();

    const sortedTasks = useMemo(() => {
        return tasks
            .filter(task => task.status in statusOrder)
            .sort((a, b) =>
                statusOrder[a.status] - statusOrder[b.status] ||
                new Date(b.createdAt) - new Date(a.createdAt)
            );
    }, [tasks]);

    if (sortedTasks.length === 0) {
        return <p>Nessuna task da fare</p>
    }

    return <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Status</th>
                <th>Data di creazione</th>
            </tr>
        </thead>
        <tbody>
            {sortedTasks.map(task => (
                <TaskRow key={task.id} task={task} />
            ))}
        </tbody>
    </table>
};
