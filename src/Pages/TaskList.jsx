import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { useState, useMemo } from "react";
import TaskRow from "../components/TaskRow.jsx";

export default function TaskList() {

    const { tasks } = useGlobalContext();

    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "v" : "^";

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev*-1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    };

    const sortedTask = useMemo(() => {
        return [...tasks].sort((a, b) => {
            let comparison;

            if(sortBy === "title") {
                comparison = a.title.localeCompare(b.title);
            } else if (sortBy === "status") {
                const statusOptions = ["To do", "Doing", "Done"];
                const indexA = statusOptions.indexOf(a.status);
                const indexB = statusOptions.indexOf(b.status);
                comparison = indexA - indexB;
            } else if (sortBy === "createdAt") {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                comparison = dateA - dateB;
            }

            return comparison * sortOrder;
        })
        
        
    }, [tasks, sortBy, sortOrder]);

    return <>
        <h1>TaskList Page</h1>

        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort("title")}>{sortBy === "title" && sortIcon}Nome</th>
                    <th onClick={() => handleSort("status")}>{sortBy === "status" && sortIcon}Status</th>
                    <th onClick={() => handleSort("createdAt")}>{sortBy === "createdAt" && sortIcon}Data di creazione</th>
                </tr>
            </thead>
            <tbody>
                {sortedTask.map(task => (
                    <TaskRow key={task.id} task={task} />
                ))}
            </tbody>
        </table>

        <Link to={"/"}>
            <button> Go Back </button>
        </Link>
    </>
};