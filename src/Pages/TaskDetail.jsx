import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext); 
    const navigate = useNavigate();

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <>
            <h2>Task non trovata</h2>
        </>
    }

    const handleDelete = async () => {
        console.log("Elimino task n.", task.id);
        try {
            await removeTask(task.id);
            alert(`Task ${task.id} eliminata con successo`);
            navigate("/tasks");
        } catch(error) {
            console.error(error);
            alert.error(message);
        }

    }

    return <>
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>In data {new Date(task.createdAt).toLocaleDateString()}</p>
            <p>Status: {task.status}</p>
            <button onClick={handleDelete}>Elimina task</button>
        </div>
    </>
}