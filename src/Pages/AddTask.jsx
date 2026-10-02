import { Link } from "react-router-dom";
import { useState, useRef, useMemo } from "react";

const symbols = "!@#$%^&*()-_£=+[]{}|;:'\\\",.<>?/`~";

export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    const taskNameError = useMemo(() => {
        if (!taskTitle.trim()) {
            return "Il nome della task non può essere vuoto"
        }
        if ([...taskTitle].some(char => symbols.includes(char))){
            return "Il nome della task non può contenere simboli"
        }
        return "";
    }, [taskTitle]);

    const handleSubmit = event => {
        event.preventDefault();
        if (taskNameError) {
            return;
        }

        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        console.log(newTask);
    }


    return <>
        <h1>AddTask Page</h1>

        <form onSubmit={handleSubmit}>
            <label>
                Nome task: 
                <input 
                type="text"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)} />
                {taskNameError && 
                <p>{taskNameError}</p>}
            </label>
            <label>
                Descrizione: 
                <textarea ref={descriptionRef} />
            </label>
            <label>
                Stato:
                <select ref={statusRef} defaultValue="To do">
                    {["To do", "Doing", "Done"].map((value, index) => {
                        return <option key={index} value={value}>{value}</option> 
                    })}
                </select>
            </label>
            <button type="submit" disabled={taskNameError}>Aggiungi task</button>
        </form>

        <Link to={"/"}>
                <button> Go Back </button>
            </Link>
    </>
};