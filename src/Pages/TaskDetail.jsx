import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

import { GlobalContext } from "../context/GlobalContext";


export default function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask, updateTask } = useContext(GlobalContext); 
    const navigate = useNavigate();

    const task = tasks.find(t => t.id === parseInt(id));

    const [showDeleteModal, setShowDeleteModal] = useState();
    const [showEditModal, setShowEditModal] = useState();

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

    const handleUpdate = async updatedTask => {
        try {
            await updateTask(updatedTask);
            setShowEditModal(false);
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
            <button onClick={() => setShowDeleteModal(true)}>Elimina task</button>
            <button onClick={() => setShowEditModal(true)}>Modifica task</button>
            <Modal 
                title="Conferma eliminazione"
                content="Sicuro di voler eliminare questa task?"
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
            />
            <EditTaskModal
                task={task}
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleUpdate}
            />
        </div>
    </>
}