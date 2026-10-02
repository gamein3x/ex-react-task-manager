import { Link } from "react-router-dom"
import { useState, useRef } from "react"

export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    return <>
        <h1>AddTask Page</h1>

        <form action="">
            <label>
                Nome task: 
                <input 
                type="text"
                value={taskTitle}
                onChange={e => setTaskTitle(e.target.value)} />
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
        </form>

        <Link to={"/"}>
                <button> Go Back </button>
            </Link>
    </>
};