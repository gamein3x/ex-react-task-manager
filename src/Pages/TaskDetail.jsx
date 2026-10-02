import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext); 

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <>
            <h2>Task non trovata</h2>
        </>
    }

    const handleDelete = () => {return console.log("Elimino task n.", task.id)}

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